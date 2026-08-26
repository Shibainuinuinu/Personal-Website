
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="text-white sticky top-0 z-50 w-full bg-[#22272e] flex justify-start h-15">
            <Link className="ml-5 mt-3 padding-10 text-xl" href="/">Home</Link>
            <Link className="ml-5 mt-3 padding-10 text-xl" href="/About">About Me</Link>
            <Link className="ml-5 mt-3 padding-10 text-xl" href="Contacts">Contacts</Link>
        </nav>
    )
}