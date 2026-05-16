export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px clamp(24px, 5vw, 72px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Chief — A Remynd product
      </span>
      <a
        href="mailto:hello@chief.remyndai.com"
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        hello@chief.remyndai.com
      </a>
    </footer>
  )
}
