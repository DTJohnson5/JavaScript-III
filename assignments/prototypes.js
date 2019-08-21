/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

 GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
  this.name = charAttributes.name;
  this.healthPoints = charAttributes.healthPoints;
}

 CharacterStats.prototype = Object.create(GameObject.prototype);

 CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage!`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
}

 Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log("This character was made on", mage.createdAt + "."); // Today's date
  console.log(archer.name + "'s stats are", archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.name + " has", swordsman.healthPoints + " health points."); // 15
  console.log("The name of the mage is " + mage.name + "."); // Bruce
  console.log(swordsman.name + " belongs to " + swordsman.team + "."); // The Round Table
  console.log(mage.name + " uses the " + mage.weapons +"."); // Staff of Shamalama
  console.log(archer.name + " speaks", archer.language + "."); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
    this.power = heroAttributes.power;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.find = function() {
    return (`${this.name} has found a new hero class: ${this.power}.`)
  }

  Hero.prototype.recover = function (character, hpUp) {
    console.log(`${this.name} has helped ${character.name} recover from their injuries! ${character.name} has recovered ${hpUp} health points.`);
    character.healthPoints = character.healthPoints + hpUp;
    return (`${character.name} now has ${character.healthPoints} health points.`);
  }

  const rockWrecker = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
width: 1,
height: 4,
    },
    healthPoints: 20,
    name: 'Athelstan',
    team: 'Mountain Kingdom',
    weapons: [
      'Pebbles',
      'Boulders',
    ],
    language: 'Carrickian',
  });

  console.log(rockWrecker.recover(mage, 3));

  function Villain(villAttributes) {
    Humanoid.call(this, villAttributes);
    this.protect = villAttributes.protect;
  }

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.burn = function(character, hpDown) {
  character.healthPoints = character.healthPoints - hpDown;
  if (character.healthPoints <= 0) {
    console.log(`${character.name} has burned to death.`);
    console.log(character.destroy());
    return (character.healthPoints);
  }
  else {
    console.log(`${character.name} was burned by ${this.name}! ${character.name} will lose ${hpDown} health points per turn.`);
    return (`${character.name} has ${character.healthPoints} health points remaining.`);
  }
}

const reignOfFire = new Villain ({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 3,
  },
  hp: 40,
  name: 'Carrie',
  team: 'Volcanic Rage',
  weapons: [
    'Fire',
    'Lava rocks',
  ],
  language: 'Salamander',
});

console.log(reignOfFire.burn(archer, 5));
console.log(rockWrecker.recover(archer, 3));