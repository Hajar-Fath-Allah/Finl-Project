export default function Header() {
  return (
    <>
      <header style={{ background: '#2c3e50', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
        <h1>My Developer Portfolio</h1>
      </header>
      <nav style={{ display: 'flex', justifyContent: 'center', background: '#34495e', padding: '0.5rem' }}>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Projects</a>
      </nav>
    </>
  );
}