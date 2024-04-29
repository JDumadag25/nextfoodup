import classes from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={key.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
