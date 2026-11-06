import ArrowLink from './ArrowLink'

export default function JoinSection() {
  return (
    <section className="grid-surface border-b border-line bg-surface py-24 md:py-28">
      <div data-reveal className="reveal section-width">
        <p className="eyebrow mb-12 text-muted">Ready?</p>
        <h2 className="display-type text-[clamp(36px,10.8vw,173px)]">Your next<br />project<br /><span className="outline-type">starts here.</span></h2>
        <ArrowLink href="/register" dark className="mt-12 min-w-[230px]">Join CampusCode</ArrowLink>
      </div>
    </section>
  )
}
