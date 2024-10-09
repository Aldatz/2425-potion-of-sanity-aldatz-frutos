export default class Effect{
    static positive_effect_tokens = ["Fortify", "Resist", "Cure", "Restore", "Regenerate", "Invisibility", "Waterbreathing"];

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    static form(name){
        return new Effect(
            name,
            positive_effect_tokens.some(token => name.includes(token))? 'beneficial' : 'harmful' 
        )
    }
}


