export default function ArrowLink({ href, children, dark = false, className = '' }) {
  return (
    <a href={href} className={`group inline-flex min-h-12 items-center justify-between gap-10 border px-6 py-4 font-mono text-[10px] uppercase tracking-wide transition-colors duration-300 ${dark ? 'border-ink bg-ink text-paper hover:border-purple hover:bg-purple' : 'border-ink/40 hover:border-purple hover:bg-purple hover:text-paper'} ${className}`}>
      {children}<span aria-hidden="true" className={`text-base transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${dark ? 'text-lime' : ''}`}>↗</span>
    </a>
  )
}
