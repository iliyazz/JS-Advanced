function solve(){
    const heroObj = {
        mage,
        fighter
    };
    return heroObj;
    
    function fighter(name){
        const state = {
            name: name,
            health: 100,
            stamina: 100,
            fight(){
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`)
            }
        }
        return state;
    }

    function mage(name){
        const state/*Mage*/ = {
            name: name,
            health: 100,
            mana: 100,
            cast(input){
                this.mana--;
                console.log(`${this.name} cast ${input}`);
            }
        }
        return state/*Mage*/;
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
const scorcherMage2 = create.mage("Scorcher");
scorcherMage2.cast("fireball")
scorcherMage2.cast("thunder")
scorcherMage2.cast("light")
scorcherMage2.cast("light")
console.log(scorcher2.stamina);
console.log(scorcher.mana);
console.log(scorcherMage2.mana);
