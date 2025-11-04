'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  const [userGoal, setUserGoal] = useState('');
  const [showPlan, setShowPlan] = useState(false);

  const techniques = [
    {
      id: 'feynman',
      title: 'Feynman Technique',
      description: 'Explain it simply',
      details: 'Learn by teaching. Explain the concept in simple terms as if teaching a child. Identify gaps in your understanding.'
    },
    {
      id: 'active-recall',
      title: 'Active Recall',
      description: 'Test yourself constantly',
      details: 'Instead of rereading, actively retrieve information from memory. Use flashcards, practice tests, and self-quizzing.'
    },
    {
      id: 'spaced-repetition',
      title: 'Spaced Repetition',
      description: 'Review at optimal intervals',
      details: 'Review material at increasing intervals: 1 day, 3 days, 7 days, 14 days, 30 days. This fights forgetting.'
    },
    {
      id: 'pomodoro',
      title: 'Pomodoro Technique',
      description: '25 minutes of focus',
      details: 'Work in 25-minute focused sessions with 5-minute breaks. After 4 sessions, take a longer 15-30 minute break.'
    },
    {
      id: 'interleaving',
      title: 'Interleaving',
      description: 'Mix different topics',
      details: 'Switch between related topics rather than blocking. This improves discrimination and application skills.'
    },
    {
      id: 'chunking',
      title: 'Chunking',
      description: 'Break into small pieces',
      details: 'Divide complex information into smaller, manageable chunks. Master each chunk before moving forward.'
    }
  ];

  const generatePlan = () => {
    setShowPlan(true);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>⚡ Learn Anything Fast</h1>
        <p style={styles.subtitle}>Master any skill using science-backed techniques</p>
      </header>

      <nav style={styles.nav}>
        <button
          style={{...styles.navButton, ...(activeSection === 'overview' ? styles.navButtonActive : {})}}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button
          style={{...styles.navButton, ...(activeSection === 'techniques' ? styles.navButtonActive : {})}}
          onClick={() => setActiveSection('techniques')}
        >
          Techniques
        </button>
        <button
          style={{...styles.navButton, ...(activeSection === 'planner' ? styles.navButtonActive : {})}}
          onClick={() => setActiveSection('planner')}
        >
          Learning Planner
        </button>
      </nav>

      <main style={styles.main}>
        {activeSection === 'overview' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>The Ultimate Learning Framework</h2>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>🎯 The 4 Pillars of Fast Learning</h3>
              <div style={styles.pillarGrid}>
                <div style={styles.pillar}>
                  <div style={styles.pillarNumber}>1</div>
                  <h4>Focus</h4>
                  <p>Eliminate distractions. Deep work in 25-minute sprints (Pomodoro).</p>
                </div>
                <div style={styles.pillar}>
                  <div style={styles.pillarNumber}>2</div>
                  <h4>Active Learning</h4>
                  <p>Test yourself constantly. No passive reading—retrieve from memory.</p>
                </div>
                <div style={styles.pillar}>
                  <div style={styles.pillarNumber}>3</div>
                  <h4>Repetition</h4>
                  <p>Spaced repetition defeats forgetting. Review at optimal intervals.</p>
                </div>
                <div style={styles.pillar}>
                  <div style={styles.pillarNumber}>4</div>
                  <h4>Application</h4>
                  <p>Practice in real contexts. Build projects, solve problems, teach others.</p>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>⏱️ The Learning Timeline</h3>
              <div style={styles.timeline}>
                <div style={styles.timelineItem}>
                  <strong>Week 1:</strong> Learn fundamentals, create mental framework (chunking)
                </div>
                <div style={styles.timelineItem}>
                  <strong>Week 2-3:</strong> Practice actively, use Feynman technique to identify gaps
                </div>
                <div style={styles.timelineItem}>
                  <strong>Week 4+:</strong> Apply in projects, teach others, maintain with spaced repetition
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>🚀 Quick Start Guide</h3>
              <ol style={styles.list}>
                <li><strong>Define your goal:</strong> Be specific. "Learn Python" → "Build a web scraper in Python"</li>
                <li><strong>Find quality resources:</strong> 1-2 primary sources (book, course) + practice platform</li>
                <li><strong>Create a schedule:</strong> 1-2 hours daily beats 10 hours on weekends</li>
                <li><strong>Apply immediately:</strong> Start building projects from day 1</li>
                <li><strong>Test yourself:</strong> Use active recall every session</li>
                <li><strong>Review strategically:</strong> Implement spaced repetition system</li>
              </ol>
            </div>
          </section>
        )}

        {activeSection === 'techniques' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Proven Learning Techniques</h2>
            <div style={styles.techniqueGrid}>
              {techniques.map(tech => (
                <div key={tech.id} style={styles.techniqueCard}>
                  <h3 style={styles.techniqueTitle}>{tech.title}</h3>
                  <p style={styles.techniqueDescription}>{tech.description}</p>
                  <p style={styles.techniqueDetails}>{tech.details}</p>
                </div>
              ))}
            </div>

            <div style={{...styles.card, marginTop: '2rem'}}>
              <h3 style={styles.cardTitle}>💡 Pro Tips</h3>
              <ul style={styles.list}>
                <li><strong>Sleep:</strong> 7-9 hours. Memory consolidation happens during sleep.</li>
                <li><strong>Exercise:</strong> 20-30 minutes before learning boosts neuroplasticity.</li>
                <li><strong>Teach:</strong> The best way to learn is to teach someone else.</li>
                <li><strong>Mistakes:</strong> Embrace them. Testing before learning improves retention.</li>
                <li><strong>Environment:</strong> Dedicated learning space with minimal distractions.</li>
                <li><strong>Multitasking:</strong> Don't. It reduces efficiency by up to 40%.</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'planner' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Personal Learning Plan</h2>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>What do you want to learn?</h3>
              <input
                type="text"
                value={userGoal}
                onChange={(e) => setUserGoal(e.target.value)}
                placeholder="e.g., Python programming, Guitar, Spanish, Data Science..."
                style={styles.input}
              />
              <button onClick={generatePlan} style={styles.button}>
                Generate Learning Plan
              </button>
            </div>

            {showPlan && userGoal && (
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Your 30-Day Plan: {userGoal}</h3>

                <div style={styles.planSection}>
                  <h4 style={styles.planWeek}>Week 1: Foundation</h4>
                  <ul style={styles.list}>
                    <li><strong>Day 1-2:</strong> Research and gather 2-3 quality resources</li>
                    <li><strong>Day 3-5:</strong> Learn core concepts using Feynman technique</li>
                    <li><strong>Day 6-7:</strong> Complete first small project/exercise</li>
                  </ul>
                  <p style={styles.planTip}>⏰ Study: 1 hour daily (2x 25-min Pomodoro sessions)</p>
                </div>

                <div style={styles.planSection}>
                  <h4 style={styles.planWeek}>Week 2-3: Practice</h4>
                  <ul style={styles.list}>
                    <li>Practice with active recall (test yourself before reviewing)</li>
                    <li>Build 2-3 projects increasing in complexity</li>
                    <li>Start spaced repetition: Review Week 1 concepts</li>
                    <li>Join a community or find a study partner</li>
                  </ul>
                  <p style={styles.planTip}>⏰ Study: 1.5 hours daily (3x 25-min sessions)</p>
                </div>

                <div style={styles.planSection}>
                  <h4 style={styles.planWeek}>Week 4: Application</h4>
                  <ul style={styles.list}>
                    <li>Work on a significant project applying all learned concepts</li>
                    <li>Teach someone else what you've learned</li>
                    <li>Review all material using spaced repetition</li>
                    <li>Identify weak areas and focus practice there</li>
                  </ul>
                  <p style={styles.planTip}>⏰ Study: 2 hours daily (4x 25-min sessions)</p>
                </div>

                <div style={styles.planSection}>
                  <h4 style={styles.planWeek}>Maintenance Schedule</h4>
                  <p>After 30 days, review material at these intervals:</p>
                  <ul style={styles.list}>
                    <li>Day 45: First review</li>
                    <li>Day 60: Second review</li>
                    <li>Day 90: Third review</li>
                    <li>Monthly thereafter</li>
                  </ul>
                </div>

                <div style={{...styles.card, background: '#f0f9ff', marginTop: '1rem'}}>
                  <h4>📝 Daily Checklist</h4>
                  <ul style={styles.checklist}>
                    <li>☐ Pomodoro sessions completed</li>
                    <li>☐ Actively tested myself (no passive reading)</li>
                    <li>☐ Explained concept in simple terms</li>
                    <li>☐ Applied knowledge in practice/project</li>
                    <li>☐ Reviewed previous material (spaced repetition)</li>
                  </ul>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      <footer style={styles.footer}>
        <p>Built with proven cognitive science principles • Start learning faster today</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 0.5rem 0',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: 0,
    opacity: 0.9,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  navButton: {
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  navButtonActive: {
    background: 'white',
    color: '#667eea',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    animation: 'fadeIn 0.5s',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginTop: 0,
    marginBottom: '1rem',
    color: '#667eea',
  },
  pillarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  pillar: {
    textAlign: 'center',
    padding: '1rem',
  },
  pillarNumber: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#667eea',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '0 auto 1rem auto',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  timelineItem: {
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '8px',
    borderLeft: '4px solid #667eea',
  },
  list: {
    lineHeight: '1.8',
  },
  techniqueGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  techniqueCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  techniqueTitle: {
    fontSize: '1.25rem',
    color: '#667eea',
    marginTop: 0,
  },
  techniqueDescription: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#764ba2',
    marginBottom: '0.5rem',
  },
  techniqueDetails: {
    lineHeight: '1.6',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxSizing: 'border-box',
  },
  button: {
    padding: '1rem 2rem',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  planSection: {
    marginBottom: '2rem',
  },
  planWeek: {
    color: '#667eea',
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
  planTip: {
    background: '#f0f9ff',
    padding: '0.75rem',
    borderRadius: '6px',
    marginTop: '0.5rem',
    fontWeight: '600',
  },
  checklist: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2',
  },
  footer: {
    textAlign: 'center',
    color: 'white',
    marginTop: '3rem',
    opacity: 0.8,
  },
};
