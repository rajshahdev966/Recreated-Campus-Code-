import CampusLogo from './CampusLogo'
import { navigation } from '../../state/landingContent'

const groups = [
  { title: 'PRODUCT', links: navigation },
  { title: 'BUILDERS', links: ['Students', 'Teams', 'Organizers', 'Developers'].map((label) => ({ label, href: '#community' })) },
  { title: 'GUIDES', links: [{ label: 'Hackathon Rules', href: '#how' }, { label: 'FAQ', href: '#about' }, { label: 'Support', href: 'mailto:campuscode@gmail.com' }, { label: 'Contact', href: 'mailto:campuscode@gmail.com' }] },
]

export default function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-canvas pt-20">
      <div className="page-width">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1"><a href="#home" aria-label="Back to CampusCode home"><CampusLogo className="w-[185px]" /></a><p className="mt-7 text-[13px] leading-6 text-muted">The student hackathon arena.<br />You build the idea,<br />we run the competition.</p></div>
          {groups.map((group) => <div key={group.title}><h3 className="eyebrow mb-6 text-ink">{group.title}</h3><ul className="space-y-3">{group.links.map((link) => <li key={link.label}><a href={link.href} className="text-[12px] text-muted transition-colors hover:text-purple">{link.label}</a></li>)}</ul></div>)}
        </div>
        <div className="eyebrow flex flex-wrap items-center justify-between gap-5 border-t border-line py-6 text-muted"><span><span className="mr-2 inline-block size-1.5 rounded-full bg-lime" />All systems operational</span><a href="mailto:campuscode@gmail.com" className="hover:text-purple">Contact ↗</a></div>
        <a href="#home" aria-label="Back to top" className="block py-6 text-center text-[16.1vw] font-black leading-none tracking-[-.085em] transition-colors hover:text-purple xl:text-[min(16.1vw,258px)]">CampusCode</a>
        <div className="eyebrow flex flex-wrap items-center justify-between gap-5 border-t border-line py-6 text-muted"><span>© 2026 CampusCode</span><span>Learn · Build · Complete · Ship</span><span>Chennai · India</span></div>
      </div>
    </footer>
  )
}
