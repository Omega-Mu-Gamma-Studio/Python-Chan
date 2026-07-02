/**
 * lessonService.js
 *
 * Responsible for loading course, unit, and lesson data.
 * Phase 1: auto-discovers static JSON files via import.meta.glob.
 * Phase 2: swap fetch calls to hit the Express API instead.
 *
 * The hook (useLesson.js) calls this service.
 * Components never import lesson data directly.
 *
 * ---- Adding new content ----
 * You do NOT need to edit this file to add a new lesson to an existing
 * unit. Just drop a JSON file at:
 *
 *   src/data/lessons/course{C}/unit{N}/{N}.{M}.json
 *
 * and it is picked up automatically (see the import.meta.glob calls
 * below). To add a brand new unit or course, add one small metadata
 * JSON file (src/data/units/unit{N}.json or
 * src/data/courses/course{C}.json) — those are auto-discovered too.
 */

// Phase 2: flip this to true
const USE_API = false;
const API_BASE = '/api'; // Phase 2 Express server base

// ---- Auto-discovery (Phase 1) ----
// Vite scans these globs at build time. Nothing here needs to be
// updated by hand when a new course/unit/lesson JSON file is added —
// as long as it lives at the right path with the right filename.

const courseFiles = import.meta.glob('../data/courses/course*.json');
const unitFiles = import.meta.glob('../data/units/unit*.json');
const lessonFiles = import.meta.glob('../data/lessons/course*/unit*/*.json');

function findLoader(files, matcher) {
  const key = Object.keys(files).find(matcher);
  return key ? files[key] : null;
}

function idsFromFiles(files, pattern) {
  return Object.keys(files)
    .map(key => {
      const match = key.match(pattern);
      return match ? Number(match[1]) : null;
    })
    .filter(id => id !== null)
    .sort((a, b) => a - b);
}

// ---- Courses ----

export async function loadCourse(courseId) {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/courses/${courseId}`);
    if (!res.ok) throw new Error(`Course ${courseId} not found`);
    return res.json();
  }

  const loader = findLoader(courseFiles, key => key.endsWith(`/course${courseId}.json`));
  if (!loader) throw new Error(`Course ${courseId} not found`);
  const mod = await loader();
  return mod.default;
}

export async function loadAllCourses() {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/courses`);
    if (!res.ok) throw new Error('Failed to load courses');
    return res.json();
  }

  const courseIds = idsFromFiles(courseFiles, /course(\d+)\.json$/);
  return Promise.all(courseIds.map(loadCourse));
}

// ---- Units ----

export async function loadUnit(unitId) {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/units/${unitId}`);
    if (!res.ok) throw new Error(`Unit ${unitId} not found`);
    return res.json();
  }

  const loader = findLoader(unitFiles, key => key.endsWith(`/unit${unitId}.json`));
  if (!loader) throw new Error(`Unit ${unitId} not found`);
  const mod = await loader();
  return mod.default;
}

export async function loadAllUnits() {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/units`);
    if (!res.ok) throw new Error('Failed to load units');
    return res.json();
  }

  const unitIds = idsFromFiles(unitFiles, /unit(\d+)\.json$/);
  return Promise.all(unitIds.map(loadUnit));
}

// Units belonging to a single course, in the order listed on the course record.
export async function loadUnitsForCourse(courseId) {
  const course = await loadCourse(courseId);
  return Promise.all(course.units.map(loadUnit));
}

// ---- Lessons ----

export async function loadLesson(lessonId) {
  if (USE_API) {
    const res = await fetch(`${API_BASE}/lessons/${lessonId}`);
    if (!res.ok) throw new Error(`Lesson ${lessonId} not found`);
    return res.json();
  }

  const loader = findLoader(lessonFiles, key => key.endsWith(`/${lessonId}.json`));
  if (!loader) throw new Error(`Lesson ${lessonId} not found`);
  const mod = await loader();
  return mod.default;
}
