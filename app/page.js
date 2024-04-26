import Image from 'next/image';
import classes from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}></div>
                <div>
                    <div className={classes.hero}>
                        <h1>Next Food Up for your Next meal</h1>
                        <p>Share your meal with your community</p>
                    </div>

                    <div className={classes.cta}>
                        <Link href="/community">Join The Community</Link>
                        <Link href="/meals">Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={classes.section}>
                    <h2>How it works</h2>
                    <p>
                        Next Food Up is a platform for foodies to share their
                        favorite recipes with the world. It&apos;s a place to
                        discover new dishes, and to connect with other food
                        lovers.
                    </p>
                    <p>
                        Next Food up is a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}
