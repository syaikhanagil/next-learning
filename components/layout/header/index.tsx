import Link from 'next/link';
import './header.scss';

const menuList = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
    { title: 'Login', link: '/login' }
];

function Header() {
    return (
        <header className="header-component">
            <div className="header-row">
                <div className="header-item">
                    <div className="logo">
                        Logo
                    </div>
                </div>
                <div className="header-item">
                    <div className="header-nav">
                        {menuList.map((i, idx) => (
                            <Link key={idx} href={i.link} className="header-nav-item">
                                {i.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
