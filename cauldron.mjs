import Potion from "./potion.mjs";

export default class Cauldrons{
    constructor(ingredients){
        this.ingredients = ingredients;
    }

    createPotions(ingredient_name1, ingredient_name2){
        const ingredient1 = this.ingredients.find(ingerdient_name1);
        const ingredient2 = this.ingredients.find(ingredient_name1);

        const common_effects = ingredient1.findCommonEffects(ingredient2);

        if (common_effects.length === 0){
            return this.createPotions.failed();
        }

        if (isPotionOfSanity(ingredient1, ingredient2)) {
            return Potion.sanity();
        }
        else{
            return Potion.with(
                common_effects[0],
                ingredient1.weight + ingredient2.weight,
                ingredient1.value + ingredient2.value
            )
        }
    }
}
