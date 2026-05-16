export default function Nav() {
  function scrollToForm(e: React.MouseEvent) {
    e.preventDefault()
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(24px, 5vw, 72px)',
      height: '64px',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      <a href="/" style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 400,
        fontSize: '1.1rem',
        letterSpacing: '0.02em',
        color: 'var(--text)',
      }}>
        Chief
      </a>

      <a
        href="#signup"
        onClick={scrollToForm}
        style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'transparent',
          border: '1px solid var(--gold)',
          color: 'var(--gold)',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold)'
          ;(e.currentTarget as HTMLAnchorElement).style.color = '#0A0A0A'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'
        }}
      >
        Get Early Access
      </a>
    </nav>
  )
}
