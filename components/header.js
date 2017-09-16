import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Avaleht</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>Mis see on?</a>
        </Link>
    </div>
)

export default Header
