/**
 * PythonHighlighter.js
 *
 * Zero-dependency Python tokenizer for Python-chan.
 * Returns an HTML string with <span class="token-*"> wrappers.
 * Used by CodeBlock.jsx.
 *
 * Token classes:
 *   token-keyword     → blue   (if, for, def, return, etc.)
 *   token-type        → teal   (int, str, len, True, None, etc.)
 *   token-string      → green  (quoted strings, incl. f/r/b prefixes and triple-quotes)
 *   token-comment     → gray   (# comments — Python has no block comments)
 *   token-number      → orange (integers, floats, hex, octal, binary, complex)
 *   token-method      → pink   (identifier immediately followed by '(')
 *   token-preprocessor→ purple (import / from lines, and @decorators)
 *   token-class-name  → yellow (PascalCase identifiers — Python's class-naming convention)
 *   token-operator    → red    (:=, ->, **, //, ==, etc.)
 *
 * Note: like the original tokenizer this replaced, this works line-by-line
 * with no cross-line state — multi-line triple-quoted docstrings are
 * highlighted best-effort per line, same simplification the old block-comment
 * handling had.
 */

// --- Python reserved keywords (all 32, excluding True/False/None — see TYPES) ---
const KEYWORDS = new Set([
  'and','as','assert','async','await',
  'break',
  'class','continue',
  'def','del',
  'elif','else','except',
  'finally','for','from',
  'global',
  'if','import','in','is',
  'lambda',
  'nonlocal','not',
  'or',
  'pass',
  'raise','return',
  'try',
  'while','with',
  'yield',
]);

// --- Python built-in types and predeclared identifiers ---
const TYPES = new Set([
  // Primitives / container types
  'bool','int','float','complex','str','bytes','bytearray','memoryview',
  'list','tuple','dict','set','frozenset','object','type',
  // Predeclared constants — highlighted like types for visual consistency
  'True','False','None','NotImplemented','Ellipsis',
  // Common builtin functions
  'print','len','range','input','open','isinstance','issubclass','super',
  'enumerate','zip','map','filter','sorted','reversed','sum','min','max',
  'abs','round','all','any','iter','next','format','repr','hash','id',
  'vars','dir','getattr','setattr','hasattr','callable',
  'staticmethod','classmethod','property',
  // Common built-in exceptions
  'Exception','ValueError','TypeError','KeyError','IndexError',
  'AttributeError','RuntimeError','StopIteration','ZeroDivisionError',
  'FileNotFoundError','ImportError','NotImplementedError',
]);

// --- Operators worth highlighting (Python has no ::, ->  used for return-type hints, and, or, not are keywords not symbols) ---
const OPERATOR_REGEX = /^(:=|->|\*\*=?|\/\/=?|<<=?|>>=?|==|!=|<=|>=|[+\-*/%&|^~<>=]=?)/;

// --- Optional string prefixes: r, b, u, f (and combos like rb, fr) ---
const STRING_PREFIX_REGEX = /^[rRbBuUfF]{1,2}(?=['"])/;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function tokenize(line) {
  let result = '';
  let i = 0;
  const len = line.length;

  while (i < len) {

    // ── Single-line comment # (Python has no block comments) ──
    if (line[i] === '#') {
      result += `<span class="token-comment">${escapeHtml(line.slice(i))}</span>`;
      break;
    }

    // ── @decorator (Python's closest analog to a preprocessor directive) ──
    if (line[i] === '@' && (i === 0 || /\s/.test(line[i - 1]))) {
      let end = i + 1;
      while (end < len && /[\w.]/.test(line[end])) end++;
      result += `<span class="token-preprocessor">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── import / from lines (Python's closest analog to a preprocessor directive) ──
    if ((i === 0 || /\s/.test(line[i - 1])) &&
        (line.slice(i, i + 5) === 'from ' || line.slice(i, i + 7) === 'import ')) {
      const word = line.slice(i, i + 5) === 'from ' ? 'from' : 'import';
      result += `<span class="token-preprocessor">${escapeHtml(word)}</span>`;
      i += word.length;
      continue;
    }

    // ── String literal (optional r/b/u/f prefix, single or triple-quoted) ──
    {
      const prefixMatch = STRING_PREFIX_REGEX.exec(line.slice(i));
      const prefixLen = prefixMatch ? prefixMatch[0].length : 0;
      const quoteChar = line[i + prefixLen];

      if (quoteChar === '"' || quoteChar === "'") {
        const isTriple =
          line[i + prefixLen + 1] === quoteChar &&
          line[i + prefixLen + 2] === quoteChar;
        let end;

        if (isTriple) {
          const triple = quoteChar.repeat(3);
          const closeIdx = line.indexOf(triple, i + prefixLen + 3);
          end = closeIdx === -1 ? len : closeIdx + 3;
        } else {
          end = i + prefixLen + 1;
          while (end < len) {
            if (line[end] === '\\') { end += 2; continue; }
            if (line[end] === quoteChar) { end++; break; }
            end++;
          }
        }

        result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
    }

    // ── Number literal (int, float, hex 0x, octal 0o, binary 0b, complex suffix j) ──
    if (/[0-9]/.test(line[i]) && (i === 0 || !/[\w]/.test(line[i - 1]))) {
      let end = i;
      // hex
      if (line[i] === '0' && (line[i + 1] === 'x' || line[i + 1] === 'X')) {
        end += 2;
        while (end < len && /[0-9a-fA-F_]/.test(line[end])) end++;
      // octal
      } else if (line[i] === '0' && (line[i + 1] === 'o' || line[i + 1] === 'O')) {
        end += 2;
        while (end < len && /[0-7_]/.test(line[end])) end++;
      // binary
      } else if (line[i] === '0' && (line[i + 1] === 'b' || line[i + 1] === 'B')) {
        end += 2;
        while (end < len && /[01_]/.test(line[end])) end++;
      } else {
        while (end < len && /[0-9._eE]/.test(line[end])) end++;
      }
      // consume complex-number suffix: j
      if (line[end] === 'j' || line[end] === 'J') end++;
      result += `<span class="token-number">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Word: keyword / type / method / identifier ──
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < len && /[\w]/.test(line[end])) end++;
      const word = line.slice(i, end);

      // Peek past whitespace to detect function/method call
      let j = end;
      while (j < len && line[j] === ' ') j++;
      const isCall = line[j] === '(';

      let cls = '';
      if (KEYWORDS.has(word))       cls = 'token-keyword';
      else if (TYPES.has(word))     cls = 'token-type';
      else if (isCall)              cls = 'token-method';
      // PascalCase identifiers — Python's class-naming convention (PEP 8)
      else if (/^[A-Z]/.test(word)) cls = 'token-class-name';

      result += cls
        ? `<span class="${cls}">${escapeHtml(word)}</span>`
        : escapeHtml(word);

      i = end;
      continue;
    }

    // ── Multi-char operators: :=, ->, **, //, ==, etc. ──
    {
      const slice = line.slice(i);
      const match = slice.match(OPERATOR_REGEX);
      if (match) {
        result += `<span class="token-operator">${escapeHtml(match[0])}</span>`;
        i += match[0].length;
        continue;
      }
    }

    // ── Everything else (punctuation, colons, brackets) ──
    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}
