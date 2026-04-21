export default function MainContent() {
  const cardStyle = { background: '#fff', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' };
  
  return (
    <main>
      <section style={{ background: '#f4f4f4', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: 'auto' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>Welcome to My Website</h1>
          <p>This is the rebuilt React version of the original static page.</p>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: 'auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={cardStyle}>
          <h3>React Migration</h3>
          <p>Moving from static elements to functional components.</p>
        </div>
        <div style={cardStyle}>
          <h3>Dockerization</h3>
          <p>Running applications in isolated container environments.</p>
        </div>
        <div style={cardStyle}>
          <h3>Vite Speed</h3>
          <p>Using modern tooling for a fast development experience.</p>
        </div>
      </div>
    </main>
  );
}