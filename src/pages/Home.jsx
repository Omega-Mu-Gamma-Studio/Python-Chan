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
      "You're back. Good. We have work to do.",
      "Don't keep me waiting.",
      "Your code won't write itself.",
      "Ready when you are. ...Actually I've been ready.",
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

      {/* ── STAT ROW ── */}
      <div className="home-stats">
        <div className="stat-card">
          <span className="stat-value">{level}</span>
          <span className="stat-label">Level</span>
          <div className="stat-bar-track">
            <div className="stat-bar-fill" style={{ width: `${levelProgress}%` }} />
          </div>
          <span className="stat-sublabel">{xpToNextLevel} XP to next</span>
        </div>

        <div className="stat-card stat-card--xp">
          <span className="stat-value">{xp.toLocaleString()}</span>
          <span className="stat-label">Total XP</span>
          <span className="stat-icon">✦</span>
        </div>

        <div className="stat-card">
          <span className="stat-value">{totalCompleted}<span className="stat-value-denom">/{totalLessons}</span></span>
          <span className="stat-label">Lessons Done</span>
          <div className="stat-bar-track">
            <div className="stat-bar-fill stat-bar-fill--cyan" style={{ width: `${overallPct}%` }} />
          </div>
          <span className="stat-sublabel">{overallPct}% complete</span>
        </div>

        <div
          className="stat-card stat-card--shop"
          onClick={() => navigate('/shop')}
          role="button"
          tabIndex={0}
        >
          <span className="stat-shop-icon">🛍️</span>
          <span className="stat-label">Closet</span>
          <span className="stat-sublabel">Lv.{level} unlocks</span>
          <span className="stat-shop-arrow">→</span>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="home-cta">
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
        <p className="cta-sub">
          {totalCompleted === 0
            ? "No prior experience required. Just show up."
            : `${totalLessons - totalCompleted} lessons remaining.`}
        </p>
      </div>

      {/* ── COURSE SELECTOR ── */}
      <div className="home-courses">
        <h2 className="home-section-title">
          <span className="section-title-bar" />
          Choose a Course
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
