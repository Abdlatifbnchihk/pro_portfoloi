import React, { useRef, useState, useEffect } from 'react'

export default function Projects() {
  const projects = [
    {
      id: 'proj-1',
      title: 'Portfolio Website',
      description: 'A personal portfolio site showcasing projects, blog posts and a contact form.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1400&q=60',
      dev: { name: 'Parent Dev', avatar: '' },
      demo: '#'
    },
    {
      id: 'proj-2',
      title: 'E‑Commerce Demo',
      description: 'A small e-commerce demo with product listing, cart and checkout flow.',
      tech: ['React', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=60',
      dev: { name: 'Child Dev', avatar: '' },
      demo: '#'
    },
    {
      id: 'proj-3',
      title: 'Chat App',
      description: 'Real-time chat app with rooms and presence indicators.',
      tech: ['Socket.IO', 'Express', 'React'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
      dev: { name: 'Another Dev', avatar: '' },
      demo: '#'
    },
    {
      id: 'proj-3',
      title: 'Chat App',
      description: 'Real-time chat app with rooms and presence indicators.',
      tech: ['Socket.IO', 'Express', 'React'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
      dev: { name: 'Another Dev', avatar: '' },
      demo: '#'
    },
    {
      id: 'proj-3',
      title: 'Chat App',
      description: 'Real-time chat app with rooms and presence indicators.',
      tech: ['Socket.IO', 'Express', 'React'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60',
      dev: { name: 'Another Dev', avatar: '' },
      demo: '#'
    }
  ]

  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  // pausedRef tracks whether autoplay should be paused (hover/focus)
  const pausedRef = useRef(false)
  // keep a ref to the current index for stable access inside intervals
  const currentIndexRef = useRef(index)

  useEffect(() => {
    currentIndexRef.current = index
  }, [index])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const children = Array.from(el.children)
      const widths = children.map((c) => c.getBoundingClientRect().left - el.getBoundingClientRect().left)
      // Find the child with smallest absolute left offset
      let closest = 0
      let min = Infinity
      widths.forEach((w, i) => {
        const d = Math.abs(w)
        if (d < min) {
          min = d
          closest = i
        }
      })
      setIndex(closest)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (dir) => {
    const el = containerRef.current
    if (!el) return
    const cardWidth = el.children[0]?.getBoundingClientRect().width || el.clientWidth
    if (dir === 'next') {
      el.scrollBy({ left: cardWidth, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const scrollToIndex = (i) => {
    const el = containerRef.current
    if (!el) return
    const cardWidth = el.children[0]?.getBoundingClientRect().width || el.clientWidth
    // Use the child's offsetLeft so gaps/margins are correctly accounted for
    const child = el.children[i]
    const left = child ? child.offsetLeft : cardWidth * i
    el.scrollTo({ left, behavior: 'smooth' })
  }

  // Autoplay: advance slides every 4s, pause on hover/focus
  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current) return
      const next = (currentIndexRef.current + 1) % projects.length
      scrollToIndex(next)
    }, 4000)
    return () => clearInterval(interval)
  }, [projects.length])

  // On mount or when projects list changes, scroll to the last project so
  // the autoplay/display shows the most recently added project first.
  useEffect(() => {
    if (!containerRef.current) return
    if (projects.length === 0) return
    const last = projects.length - 1
    // small delay to let layout settle
    const t = setTimeout(() => {
      scrollToIndex(last)
      setIndex(last)
      currentIndexRef.current = last
    }, 60)
    return () => clearTimeout(t)
  }, [projects.length])

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold">Projects</h2>
            <p className="text-slate-600 py-5">Selected projects I built — swipe or use arrows to browse.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollTo('prev')}
              aria-label="Previous project"
              className="text-[#92b115ee] text-4xl cursor-pointer hover:text-[#7b9513ee]"
            >
              ‹
            </button>
            <button
              onClick={() => scrollTo('next')}
              aria-label="Next project"
              className="text-[#92b115ee] text-4xl cursor-pointer hover:text-[#7b9513ee]"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative">
          {/* hide native scrollbar for the projects scroller and keep touch scrolling */}
            <style>{`.projects-scroll{ -ms-overflow-style: none; scrollbar-width: none; }
            .projects-scroll::-webkit-scrollbar{ display: none; }
            .projects-dots{ gap: 0.5rem }
            `}</style>
          <div
            ref={containerRef}
            className="projects-scroll flex gap-6 overflow-x-auto pb-4 scroll-pl-4 snap-x snap-mandatory touch-pan-x"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            onTouchEnd={() => (pausedRef.current = false)}
          >
            {projects.map((p) => (
              <article
                key={p.id}
                className="snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[440px] bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#92b115ee] flex items-center justify-center text-white font-bold">
                        {p.dev.name.split(' ').map(s=>s[0]).slice(0,2).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{p.dev.name}</div>
                        <div className="text-xs text-slate-500">Lead developer</div>
                      </div>
                    </div>

                    <a
                      href={p.demo}
                      className="inline-flex items-center px-3 py-2 bg-[#92b115ee] text-white rounded-md text-sm font-medium hover:bg-[#71822bee]"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots for mobile */}
          <div className="mt-4 flex items-center justify-center projects-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#92b115ee]' : 'bg-slate-300'}`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
