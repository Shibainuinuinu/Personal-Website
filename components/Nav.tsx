
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="text-white sticky top-0 z-50 w-full bg-black">
            <Link href="/">Home</Link>
            <Link href="/About">About Me</Link>
            <Link href="Contacts">Contacts</Link>
        </nav>
    )
}