import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import useLessonStore from '../store/lessonStore';
import { loadAllCourses } from '../services/lessonService';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { lastVisited, xp, level, levelProgress, xpToNextLevel, completedLessons } = useProgress();
  const { setExpression, setDialogue } = useLessonStore();

  const [courses, setCourses] = useState([]);
  const [coursesError, setCoursesError] = useState(null);

  const totalCompleted = completedLessons ? Object.keys(completedLessons).length : 0;
  const totalLessons = 75;
  const overallPct = Math.round((totalCompleted / totalLessons) * 100);

  useEffect(() => {
    setExpression('idle');
    const greetings = [
    // Warm & Approachable
    "Hey! Come in, come in. Coffee's fresh. I saved you a spot.",
    "Oh, you're here! I was just thinking about that bug you had.",
    "Perfect timing — I was just about to explain this one.",
    "There you are! I was starting to miss you.",
    
    // Playful & Self-Deprecating
    "Welcome back! I promise I didn't step on my tail this time.",
    "I almost spilled my coffee waiting for you. Almost.",
    "I've been waiting. But I had a cup of tea, so it's fine.",
    "I was just watching a loss curve converge. It's fine. I'm fine.",
    
    // Gently Encouraging
    "Ready to try again? I know you've got this.",
    "Take your time. I'll wait. I'm good at that.",
    "I know you're stuck, but I also know you'll figure it out. ...With my help, of course.",
    "Breathe. You've got this. And if you don't, I'm here.",
    
    // Mentor Energy
    "Ah, there you are. Let's untangle this together.",
    "I saved your spot — and your notebook.",
    "I've been looking at your code. Want to walk through it?",
    "I know what you're going to ask. And the answer is 'yes, you can do that.'",
    
    // Data Science Themed
    "Welcome back! I promise the data is cleaner than last time.",
    "I've been testing this hypothesis all week: you're going to nail this today.",
    "The loss curve is trending down. Just like your learning progress.",
    "The model is trained. The question is: are you?",
    
    // Serpent Themed (Subtle)
    "I shed my old ideas. Ready for new ones?",
    "I've been watching you. In a non-creepy, educational way.",
    "I've been lying in wait. But it's a *nice* wait. Like a sunbeam.",
  ];
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    setDialogue(msg);
  }, []);

  useEffect(() => {
    loadAllCourses()
      .then(setCourses)
      .catch(e => setCoursesError(e.message));
  }, []);

  return (
    <div className="home-page">

      {/* ── HERO: lakeside clearing ── */}
      <div className="home-hero">
        <div className="hero-water" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-portrait-wrap">
            <img
              src="/sprites/teaching.png"
              alt="Python-chan by the water"
              className="hero-portrait"
              draggable={false}
            />
            <img
              src="/sprites/teaching.png"
              alt=""
              aria-hidden="true"
              className="hero-portrait hero-portrait--reflection"
              draggable={false}
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Welcome back to the clearing.</h1>
            <p className="hero-sub">
              {totalCompleted === 0
                ? "No prior experience required. Just show up."
                : `${totalLessons - totalCompleted} lessons left before the far shore.`}
            </p>
            {lastVisited ? (
              <button
                className="cta-btn cta-btn--primary"
                onClick={() => navigate(`/lesson/${lastVisited}`)}
              >
                <span className="cta-btn-icon">▶</span>
                Continue — Lesson {lastVisited}
              </button>
            ) : (
              <button
                className="cta-btn cta-btn--primary"
                onClick={() => navigate('/lesson/1.1')}
              >
                <span className="cta-btn-icon">▶</span>
                Begin Training
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── STEPPING STONES: stats ── */}
      <div className="home-stats">
        <div className="stone stone--level">
          <span className="stone-value">{level}</span>
          <span className="stone-label">Level</span>
          <div className="stream-track">
            <div className="stream-fill" style={{ width: `${levelProgress}%` }} />
          </div>
          <span className="stone-sublabel">{xpToNextLevel} XP to next</span>
        </div>

        <div className="stone stone--xp">
          <span className="stone-value">{xp.toLocaleString()}</span>
          <span className="stone-label">Total XP</span>
          <span className="stone-ripple" aria-hidden="true" />
        </div>

        <div className="stone stone--progress">
          <span className="stone-value">{totalCompleted}<span className="stone-value-denom">/{totalLessons}</span></span>
          <span className="stone-label">Lessons Done</span>
          <div className="stream-track">
            <div className="stream-fill stream-fill--amber" style={{ width: `${overallPct}%` }} />
          </div>
          <span className="stone-sublabel">{overallPct}% complete</span>
        </div>

        <div
          className="stone stone--shop"
          onClick={() => navigate('/shop')}
          role="button"
          tabIndex={0}
        >
          <span className="stone-shop-icon">🛍️</span>
          <span className="stone-label">Closet</span>
          <span className="stone-sublabel">Lv.{level} unlocks</span>
          <span className="stone-shop-arrow">→</span>
        </div>
      </div>

      {/* ── GROVES: course selector ── */}
      <div className="home-courses">
        <h2 className="home-section-title">
          <span className="section-title-bar" />
          Wander into a grove
        </h2>

        {coursesError && <p className="course-grid-error">Couldn't load courses.</p>}

        <div className="course-grid">
          {courses.map(course => {
            const clickable = course.isPublished;
            return (
              <div
                key={course.id}
                className={`course-card ${clickable ? 'course-card--active' : 'course-card--locked'}`}
                onClick={() => clickable && navigate(`/course/${course.id}`)}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
              >
                <div className="course-card-head">
                  <span className="course-card-icon">{course.icon}</span>
                  {!clickable && <span className="course-card-badge">Coming Soon</span>}
                </div>
                <span className="course-card-title">{course.title}</span>
                <span className="course-card-tagline">{course.tagline}</span>
                <span className="course-card-meta">{course.units.length} units</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Home;
