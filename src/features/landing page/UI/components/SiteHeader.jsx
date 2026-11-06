import { useState } from 'react'
import CampusLogo from './CampusLogo'
import ArrowLink from './ArrowLink'
import { navigation } from '../../state/landingContent'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="page-width relative z-20 flex h-[88px] items-center justify-between gap-5">
      <a href="#home" aria-label="CampusCode home"><CampusLogo className="w-[165px] sm:w-[185px]" /></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
        {navigation.map((item) => <a key={item.href} href={item.href} className="eyebrow text-muted transition-colors hover:text-purple">{item.label}</a>)}
      </nav>
      <div className="hidden items-center gap-7 md:flex">
        <a href="/login" className="eyebrow text-muted hover:text-purple">Login</a>
        <ArrowLink href="/register" className="min-h-10 px-4 py-2">Join CampusCode</ArrowLink>
      </div>
      <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="flex size-11 items-center justify-center border border-line text-xl lg:hidden">{menuOpen ? '×' : '☰'}</button>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-20 flex flex-col gap-6 border border-line bg-canvas p-6 shadow-lg lg:hidden">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="eyebrow">{item.label}</a>)}
        <a href="/login" className="eyebrow">Login</a>
        <ArrowLink href="/register">Join CampusCode</ArrowLink>
      </nav>}
    </header>
  )
}
