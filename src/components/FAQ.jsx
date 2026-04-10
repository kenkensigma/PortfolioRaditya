'use client'
import { useState, useRef, useEffect } from 'react'
import { faqCategories, KB, faqKeywords } from '@/data/faq'

export default function FAQ() {
  const [messages, setMessages] = useState([
    { role: 'ai', html: "Hey! Pick a question on the left or type your own below — I'll answer right away. 👋", typing: false }
  ])
  const [input, setInput] = useState('')
  const [activeId, setActiveId] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceOverlay, setVoiceOverlay] = useState(false)
  const [voiceTranscript, setVoiceTranscript] = useState('')
  const [voiceStatus, setVoiceStatus] = useState('Listening...')
  const [hasVoice, setHasVoice] = useState(false)

  const messagesRef   = useRef(null)
  const recognitionRef = useRef(null)
  const synthRef       = useRef(null)
  const fromVoiceRef   = useRef(false)

  useEffect(() => {
    synthRef.current = window.speechSynthesis
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SR) {
      setHasVoice(true)
      const rec = new SR()
      rec.lang = 'en-US'; rec.continuous = false; rec.interimResults = true

      rec.onstart = () => { setIsListening(true); setVoiceOverlay(true); setVoiceStatus('Listening...'); setVoiceTranscript('') }
      rec.onresult = e => {
        const t = Array.from(e.results).map(r => r[0].transcript).join('')
        setVoiceTranscript(t)
        if (e.results[e.results.length-1].isFinal) {
          setVoiceStatus('Got it!')
          setTimeout(() => { stopListening(); if (t.trim()) ask(t.trim(), null, true) }, 500)
        }
      }
      rec.onerror = e => {
        stopListening()
        if (e.error === 'no-speech') addMsg('ai', "I didn\'t catch that — try speaking a bit louder!")
        else if (e.error === 'not-allowed') addMsg('ai', 'Microphone access was denied. Please allow mic permissions in your browser.')
      }
      rec.onend = () => stopListening()
      recognitionRef.current = rec
    }
    window.speechSynthesis?.getVoices()
    if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
  }, [])

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function addMsg(role, html) {
    setMessages(prev => [...prev, { role, html, typing: role === 'ai' }])
    if (role === 'ai') {
      setTimeout(() => {
        setMessages(prev => prev.map((m, i) => i === prev.length-1 ? { ...m, typing: false } : m))
      }, 420)
    }
  }

  function speak(text) {
    const synth = synthRef.current; if (!synth) return
    synth.cancel()
    const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    const u = new SpeechSynthesisUtterance(clean)
    u.rate = 0.95; u.pitch = 1; u.volume = 1
    const voices = synth.getVoices()
    const pref = voices.find(v => v.name === 'Microsoft David - English (United States)')
      || voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'))
      || voices.find(v => v.lang.startsWith('en'))
    if (pref) u.voice = pref
    u.onstart = () => setIsSpeaking(true)
    u.onend = u.onerror = () => setIsSpeaking(false)
    synth.speak(u)
  }

  function startListening() { if (!recognitionRef.current || isListening) return; synthRef.current?.cancel(); recognitionRef.current.start() }
  function stopListening() { setIsListening(false); setVoiceOverlay(false); try { recognitionRef.current?.stop() } catch(e){} }

  function findMatch(q) {
    const s = q.toLowerCase().trim()
    for (const [id, item] of Object.entries(KB)) { if (item.q.toLowerCase() === s) return { id, item } }
    let best = null, bestScore = 0
    for (const [id, words] of Object.entries(faqKeywords)) {
      const score = words.filter(w => s.includes(w)).length
      if (score > bestScore) { bestScore = score; best = { id, item: KB[id] } }
    }
    return bestScore > 0 ? best : null
  }

  function ask(question, knownId = null, fromVoice = false) {
    if (!question.trim()) return
    fromVoiceRef.current = fromVoice
    setActiveId(knownId)
    addMsg('user', question)
    const match = knownId ? { id: knownId, item: KB[knownId] } : findMatch(question)
    setTimeout(() => {
      const answer = match
        ? match.item.a
        : "Hmm, I don't have a specific answer for that. Try one of the questions on the left, or reach out via the <strong>contact section</strong> below! 👇"
      addMsg('ai', answer)
      if (fromVoice) setTimeout(() => speak(answer), 600)
    }, 100)
    setInput('')
  }

  return (
    <section className="aifaq section-reveal" id="faq">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">05</span>
          <span className="section-label__text">FAQ</span>
        </div>

        <div className="aifaq__header">
          <div>
            <h2 className="section-title">Got a<br /><em>question?</em></h2>
            <p className="aifaq__sub">Click a question, type, or <strong>speak</strong> — I'll answer instantly.</p>
          </div>
          <div className="aifaq__badge" aria-hidden="true">
            <div className="aifaq__badge-dot" />
            <span>Always Available</span>
          </div>
        </div>

        <div className="aifaq__body">
          {/* Questions */}
          <div className="aifaq__questions">
            {faqCategories.map(cat => (
              <div className="faq-category" key={cat.label}>
                <div className="faq-category__header">
                  <span className="faq-category__icon">{cat.icon}</span>
                  <span className="faq-category__label">{cat.label}</span>
                </div>
                <div className="faq-category__items">
                  {cat.items.map(item => (
                    <button key={item.id}
                      className={`faq-q-btn${activeId === item.id ? ' active' : ''}`}
                      onClick={() => ask(item.q, item.id)}>
                      <span className="faq-q-btn__text">{item.q}</span>
                      <span className="faq-q-btn__arrow">→</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chat */}
          <div className="aifaq__chat">
            {voiceOverlay && (
              <div className="voice-overlay open">
                <div className="voice-overlay__inner">
                  <div className="voice-rings">
                    <div className="voice-ring voice-ring--1" /><div className="voice-ring voice-ring--2" /><div className="voice-ring voice-ring--3" />
                    <div className="voice-core">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="voice-status">{voiceStatus}</p>
                  <p className="voice-transcript">{voiceTranscript}</p>
                  <button className="voice-cancel" onClick={stopListening}>Cancel</button>
                </div>
              </div>
            )}

            <div className="aifaq__messages" ref={messagesRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`faq-msg faq-msg--${msg.role}`}>
                  {msg.role === 'ai' && <div className="faq-msg__avatar" aria-hidden="true">R</div>}
                  <div className={`faq-msg__bubble${msg.role === 'user' ? ' faq-msg__bubble--user' : ''}`}>
                    {msg.typing
                      ? <div className="typing-dots"><span/><span/><span/></div>
                      : <>
                          <p dangerouslySetInnerHTML={{ __html: msg.html }} />
                          {msg.role === 'ai' && (
                            <button className="faq-speak-btn" onClick={() => speak(msg.html)}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor"/>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                              Read aloud
                            </button>
                          )}
                        </>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="aifaq__input-wrap">
              <div className="aifaq__input-inner">
                {hasVoice && (
                  <button className={`aifaq__voice-btn${isListening ? ' listening' : ''}${isSpeaking ? ' speaking' : ''}`}
                    onClick={() => { if (isSpeaking) { synthRef.current?.cancel(); return } isListening ? stopListening() : startListening() }}
                    aria-label="Voice input">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
                <input type="text" className="aifaq__input"
                  placeholder="Type or speak your question..."
                  value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') ask(input) }}
                  maxLength={200} />
                <button className="aifaq__send" onClick={() => ask(input)} aria-label="Send">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 8H2M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="aifaq__hint">{hasVoice ? '🎤 Voice supported' : '⌨ Type your question below'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
