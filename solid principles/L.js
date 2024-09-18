// * L - Liskov’s Substitution Principle (LSP)
 
// * Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
  

// * ex:- Violation of LSP


// ! Problem: Suppose we have a Bird class with methods for fly and walk. 
// !          We also have a Penguin subclass that should inherit from Bird, but penguins can't fly.

class Bird {
    fly() {
      console.log("Flying");
    }
    
    walk() {
      console.log("Walking");
    }
  }
  
class Penguin extends Bird {
fly() {
    throw new Error("Penguins can't fly");
}

walk() {
    console.log("Penguin is walking");
}
}
  
// Usage
function letBirdFly(bird) {
bird.fly();
}

const penguin = new Penguin();
letBirdFly(penguin);  // Throws error: Penguins can't fly
  

// ? Solution: To adhere to the Liskov Substitution Principle, 
// ?           we need to redesign our hierarchy so that the subclass can substitute the superclass without issues.

class FlyingBird {
fly() {
    console.log("Flying");
}
}

class WalkingBird {
walk() {
    console.log("Walking");
}
}

class Sparrow extends FlyingBird {
// Sparrow inherits fly from FlyingBird
}

class Penguin extends WalkingBird {
// Penguin inherits walk from WalkingBird
}
  
// Usage
function letBirdFly(bird) {
if (bird instanceof FlyingBird) {
    bird.fly();
} else {
    console.log("This bird can't fly");
}
}
  
const sparrow = new Sparrow();
const penguin1 = new Penguin();

letBirdFly(sparrow);  // Output: Flying
letBirdFly(penguin1);  // Output: This bird can't fly

