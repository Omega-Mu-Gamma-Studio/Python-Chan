import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadCourse, loadUnitsForCourse } from '../services/lessonService';
import { useProgress } from '../hooks/useProgress';
import './CoursePage.css';

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { isUnitUnlocked, completedLessons } = useProgress();

  const [course, setCourse] = useState(null);
  const [units, setUnits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([loadCourse(Number(courseId)), loadUnitsForCourse(Number(courseId))])
      .then(([courseData, unitData]) => {
        setCourse(courseData);
        setUnits(unitData);
      })
      .catch(e => setError(e.message));
  }, [courseId]);

  if (error) return (
    <div className="unit-page-state">
      <p>Course not found.</p>
      <button className="btn btn-ghost" onClick={() => navigate('/')}>← Back</button>
    </div>
  );

  if (!course) return (
    <div className="unit-page-state">
      <span className="loading-spinner" />
    </div>
  );

  return (
    <div className="course-page">
      <div className="course-page-header">
        <button className="btn btn-ghost" onClick={() => navigate('/')}>← Courses</button>
        <div>
          <span className="course-page-badge">{course.icon} Course {course.id}</span>
          <h1 className="course-page-title">{course.title}</h1>
          <p className="course-page-tagline">{course.tagline}</p>
        </div>
      </div>

      <div className="unit-grid">
        {units.map(unit => {
          const unlocked = isUnitUnlocked(unit.id) && unit.isPublished;
          const unitCompleted = completedLessons
            ? Object.keys(completedLessons).filter(id => id.startsWith(`${unit.id}.`)).length
            : 0;
          const unitPct = unit.lessons.length
            ? Math.round((unitCompleted / unit.lessons.length) * 100)
            : 0;

          return (
            <div
              key={unit.id}
              className={`unit-card ${unlocked ? 'unit-card--active' : 'unit-card--locked'}`}
              onClick={() => unlocked && navigate(`/unit/${unit.id}`)}
              role={unlocked ? 'button' : undefined}
              tabIndex={unlocked ? 0 : undefined}
            >
              <div className="unit-card-head">
                <span className="unit-card-num">U{unit.id}</span>
                {unlocked ? (
                  <span className="unit-card-pct">{unitPct}%</span>
                ) : (
                  <span className="unit-card-lock">🔒</span>
                )}
              </div>
              <span className="unit-card-title">{unit.title}</span>
              <span className="unit-card-meta">{unit.lessons.length} lessons</span>
              {unlocked && (
                <div className="unit-card-bar-track">
                  <div className="unit-card-bar-fill" style={{ width: `${unitPct}%` }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePage;
