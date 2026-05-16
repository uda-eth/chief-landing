import { useEffect, useState } from 'react'

interface Message {
  id: number
  text: string
  from: 'user' | 'chief'
  visible: boolean
}

const MESSAGES: Omit<Message, 'visible'>[] = [
  { id: 1, from: 'user', text: 'remind clients with overdue invoices' },
  { id: 2, from: 'chief', text: 'Drafted 7 follow-ups. Want me to send or review first?' },
]

export default function IMessageThread() {
  const [messages, setMessages] = useState<Message[]>(
    MESSAGES.map(m => ({ ...m, visible: false }))
  )
  const [showTyping, setShowTyping] = useState(false)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = []

    function runCycle() {
      setMessages(MESSAGES.map(m => ({ ...m, visible: false })))
      setShowTyping(false)

      timeouts.push(setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === 1 ? { ...m, visible: true } : m))
      }, 600))

      timeouts.push(setTimeout(() => {
        setShowTyping(true)
      }, 1600))

      timeouts.push(setTimeout(() => {
        setShowTyping(false)
        setMessages(prev => prev.map(m => m.id === 2 ? { ...m, visible: true } : m))
      }, 3200))

      timeouts.push(setTimeout(() => {
        setCycle(c => c + 1)
      }, 7000))
    }

    runCycle()

    return () => timeouts.forEach(clearTimeout)
  }, [cycle])

  const bubbleBase: React.CSSProperties = {
    display: 'inline-block',
    maxWidth: '80%',
    padding: '10px 14px',
    fontSize: '0.9rem',
    lineHeight: 1.4,
    wordBreak: 'break-word',
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      background: '#1C1C1E',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
      userSelect: 'none',
    }}>
      {/* Status bar */}
      <div style={{
        background: '#1C1C1E',
        padding: '12px 20px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #C9A961, #8B6B2F)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.75rem', fontWeight: 600, color: '#0A0A0A',
          }}>
            C
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F5F5F7' }}>Chief</div>
            <div style={{ fontSize: '0.65rem', color: '#888' }}>iMessage</div>
          </div>
        </div>
        <div style={{ fontSize: '0.65rem', color: '#888' }}>now</div>
      </div>

      {/* Messages */}
      <div style={{
        padding: '16px 12px',
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {messages.map(msg => (
          msg.visible && (
            <div
              key={msg.id}
              className="bubble-animate"
              style={{
                display: 'flex',
                justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <span style={{
                ...bubbleBase,
                background: msg.from === 'user' ? '#0A84FF' : '#3A3A3C',
                color: '#fff',
                borderRadius: msg.from === 'user'
                  ? '18px 18px 4px 18px'
                  : '18px 18px 18px 4px',
              }}>
                {msg.text}
              </span>
            </div>
          )
        ))}

        {showTyping && (
          <div className="bubble-animate" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{
              ...bubbleBase,
              background: '#3A3A3C',
              borderRadius: '18px 18px 18px 4px',
              padding: '12px 16px',
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
            }}>
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{
        padding: '8px 12px 12px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{
          flex: 1,
          background: '#2C2C2E',
          borderRadius: '18px',
          padding: '8px 14px',
          fontSize: '0.8rem',
          color: '#666',
        }}>
          iMessage
        </div>
        <div style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: '#0A84FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L6 11M6 1L2 5M6 1L10 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
