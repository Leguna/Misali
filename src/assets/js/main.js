import $ from 'jquery';

import './component/search-bar';
import './component/meal-list';
import DataSource from './data/data-source';


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");


    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.meals = results;

    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    window.onload = onButtonSearchClicked()
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;