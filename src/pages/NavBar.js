import Link from "next/link";

export default function NavBar() {
    return <div><nav>
        <Link href="/" className="link">Home</Link>
        <Link href="/About" className="link">About</Link>
        <Link href="/Contact" className="link">Contact</Link>
        <Link href="/Compose" className="link">Compose</Link>
    </nav></div>
  }
  