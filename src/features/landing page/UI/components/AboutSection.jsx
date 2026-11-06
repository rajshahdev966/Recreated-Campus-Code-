export default function AboutSection() {
  return (
    <section id="about" className="border-b border-line bg-paper/30 py-24 md:py-36">
      <div className="section-width grid gap-10 lg:grid-cols-[80px_1.35fr_1fr] lg:gap-8">
        <span className="eyebrow text-purple">01</span>
        <div data-reveal className="reveal relative z-10">
          <p className="eyebrow mb-12 text-muted"><span className="mr-2 text-lime">●</span>What is CampusCode?</p>
          <h2 className="display-type text-[clamp(48px,8.8vw,140px)]">Where<br />students<br /><span className="outline-type">build.</span></h2>
          <p className="mt-9 max-w-[420px] text-[15px] leading-7 text-muted">CampusCode brings students, teams, organizers and hackathons into one connected ecosystem.</p>
        </div>
        <div data-reveal aria-hidden="true" className="reveal relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center self-center">
          <div className="orbit-spin absolute inset-0 rounded-full border border-lime/20"><span className="eyebrow absolute left-[24%] top-[5%] text-muted">01</span><span className="absolute right-[9%] top-[21%] size-2 rounded-full bg-lime" /></div>
          <div className="orbit-spin absolute inset-[16%] rounded-full border border-purple/20 [animation-direction:reverse]"><span className="eyebrow absolute -right-1 top-1/2 text-muted">02</span></div>
          <div className="absolute inset-[31%] rounded-full border border-purple/20 bg-purple/5 shadow-[0_0_70px_#7665ff0c]" />
          <span className="flex size-25 items-center justify-center border border-purple bg-canvas text-3xl font-black lowercase text-purple">CC</span>
        </div>
      </div>
    </section>
  )
}
