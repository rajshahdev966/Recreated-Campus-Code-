export default function MissionSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface/40 py-24 md:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 whitespace-nowrap text-[23vw] font-black tracking-[-.09em] text-ink/[.025]">CAMPUSCODE</span>
      <div data-reveal className="reveal section-width relative text-center">
        <p className="eyebrow mb-14 text-muted">05 — The mission</p>
        <h2 className="display-type text-[clamp(34px,11vw,176px)]">Great<br />ideas<br /><span className="outline-type">need builders.</span></h2>
        <p className="mx-auto mt-12 max-w-[400px] text-[15px] leading-7 text-muted">Your university is full of people with ideas. CampusCode gives those ideas somewhere to go.</p>
      </div>
    </section>
  )
}
