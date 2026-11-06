import { useRef, useState } from 'react'

export default function ExperienceSection() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  async function togglePlayback() {
    const video = videoRef.current
    if (video.paused) {
      try {
        await video.play()
        setHasStarted(true)
      } catch {
        video.controls = true
      }
    } else {
      video.pause()
    }
  }

  return (
    <section aria-label="The CampusCode experience" className="grid-surface border-b border-line bg-surface py-12 md:py-16">
      <div className="page-width">
        <div className="eyebrow mb-8 flex justify-between text-muted"><span>02 — Experience</span><span>00:30</span></div>
        <div data-reveal className="reveal relative isolate aspect-[4/3] overflow-hidden rounded-[20px] bg-ink md:aspect-video">
          <video ref={videoRef} src="/videos/what-is-campuscode.mp4" playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} className="absolute inset-0 h-full w-full object-cover" aria-label="What is CampusCode film" />
          {!hasStarted && <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-ink px-[7%] text-paper">
            <span className="eyebrow mb-10 text-paper/40">The CampusCode experience</span>
            <p className="display-type text-[clamp(50px,9vw,144px)]">Build<br /><span className="text-lime">together.</span></p>
            <span aria-hidden="true" className="absolute right-[10%] top-[20%] size-40 rounded-full bg-purple/20 blur-[65px]" />
          </div>}
          <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause the CampusCode film' : 'Play the CampusCode film'} className={`group absolute flex items-center gap-4 text-paper ${hasStarted ? 'bottom-6 right-6' : 'bottom-[9%] left-[7%]'}`}>
            <span className="flex size-12 items-center justify-center rounded-full border border-paper/50 text-sm transition-colors group-hover:bg-purple">{playing ? 'Ⅱ' : '▶'}</span>
            <span className="eyebrow">{playing ? 'Pause film' : hasStarted ? 'Play film' : 'Tap to play'}</span>
          </button>
        </div>
        <div className="eyebrow mt-9 flex justify-between text-muted"><span>Watch the story</span><span>Build together ↗</span></div>
      </div>
    </section>
  )
}
