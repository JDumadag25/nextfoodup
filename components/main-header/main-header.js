import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image priority src={logoImg} alt="food logo" />
                    Next Food Up
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodie Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
