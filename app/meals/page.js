import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
    title: 'All Meals',
    description: 'Browse all meals shared by users',
};

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite food or recipe and try it out!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your favorite foods</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense
                    fallback={
                        <p className={classes.loading}>Loading Meals...</p>
                    }
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}
