import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldrons from "./cauldron.mjs";

const execute = async () => {
    try {
        const data = await getData();

        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldrons(ingredients);
    } catch (error) {
        
    }
}

execute();