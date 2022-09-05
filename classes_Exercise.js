//HW 8/17 OBJECTS, CLASSES, 

//HOMEWORK 

{ // CAT CLASS HW
    class Cat {
        constructor(age, breed, quirk, hairy) {
            this.age = age
            this.breed = breed
            this.quirk = quirk
            this.hairy = true
        }

        hunt() {
            console.log(`My cat is ${this.age} yrs old. `)
        }

    }
    let Charlie = new Cat(12, "Tiger", "likes TV")
    let Carl = new Cat(1, "Exotic Shorthair", false)

    console.log(Charlie)
    console.log(Carl)
        // console.log(`my cat charlie is ${charlie}`)

}

// PIRATE CLASS HW
class Pirate {
    constructor(name, outfit, weapon, teeth) {
        this.name = name
        this.outfit = outfit
        this.weapon = weapon
        this.teeth = teeth
    }

    plank() {
        console.log(this.name, "will walk the plank!")
    }

    fight() {
        console.log(`I have ${this.weapon} in my belt`)
    }
}

let JollyRoger = [
    new Pirate("Willie", ["pegleg", "eyepatch", "shorts"], "fork", "gold"),
    new Pirate("Steve", ["shoes", "hook hand", "hat"], "soard", "5"),
]

const Willie = JollyRoger[0]
const Steve = JollyRoger[1]

let BlackPearl = [
    new Pirate("Bubba", ["tank top", "flip flops", "gloves"], "magic", true),
    new Pirate("Samson", ["sandals", "SPF", "sun glasses"], "credit card", true)
]
const Bubba = BlackPearl[0]
const Samson = BlackPearl[1]

Willie.fight()
Steve.plank()

console.log(JollyRoger)
console.log(BlackPearl)

for (let i = 0; i < JollyRoger.length; i++) {
    console.log("TEST 1 " + JollyRoger[i].outfit)
    console.log(JollyRoger[i].weapon)
    console.log(JollyRoger[i].teeth)
}