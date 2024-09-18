// * D - Dependency Inversion Principle (DIP)

/* 
   High-level modules should not depend on low-level modules.
   Both should depend on abstractions (e.g., interfaces). 
   Abstractions should not depend on details. 
   Details should depend on abstractions.
*/

// * ex:- Violation of DIP

// ! Problem: Let’s say we have a LightBulb and a Switch. 
// !          The Switch directly controls the LightBulb, which creates a tight coupling between the two classes.

/*
   The Switch class is dependent on the specific implementation of LightBulb. 
   If we later decide to replace LightBulb with another type of bulb, like an LEDLightBulb, 
   we’ll have to change the Switch class, breaking the Open/Closed Principle.
   Switch should depend on an abstraction, not a concrete class like LightBulb.
*/

class LightBulb {
    turnOn() {
        console.log("LightBulb is turned ON");
    }

    turnOff() {
        console.log("LightBulb is turned OFF");
    }
}

class Switch {
    constructor(lightBulb) {
        this.lightBulb = lightBulb;
    }

    operate(isOn) {
        if (isOn) {
            this.lightBulb.turnOn();
        } else {
            this.lightBulb.turnOff();
        }
    }
}

// Usage
const bulb = new LightBulb();
const mySwitch = new Switch(bulb);
mySwitch.operate(true);  // LightBulb is turned ON
mySwitch.operate(false); // LightBulb is turned OFF




// ? Solution: We can introduce an interface (or abstraction) called Switchable, and both LightBulb and LEDLightBulb will implement this interface. 
// ?           This way, the Switch only depends on the Switchable interface and not the specific implementation of LightBulb.


// Abstraction: Interface for Switchable devices
class Switchable {
    turnOn() { }
    turnOff() { }
}

// Concrete class for LightBulb
class LightBulb extends Switchable {
    turnOn() {
        console.log("LightBulb is turned ON");
    }

    turnOff() {
        console.log("LightBulb is turned OFF");
    }
}

// Concrete class for LEDLightBulb
class LEDLightBulb extends Switchable {
    turnOn() {
        console.log("LED LightBulb is turned ON");
    }

    turnOff() {
        console.log("LED LightBulb is turned OFF");
    }
}

// Switch class depends on abstraction (Switchable) instead of concrete class
class Switch {
    constructor(device) {
        this.device = device; // device is of type Switchable
    }

    operate(isOn) {
        if (isOn) {
            this.device.turnOn();
        } else {
            this.device.turnOff();
        }
    }
}

// Usage
const bulb1 = new LightBulb();
const ledBulb = new LEDLightBulb();

// Switch works with both LightBulb and LEDLightBulb
const mySwitch1 = new Switch(bulb1);
mySwitch1.operate(true);  // LightBulb is turned ON
mySwitch1.operate(false); // LightBulb is turned OFF

const myLEDSwitch = new Switch(ledBulb);
myLEDSwitch.operate(true);  // LED LightBulb is turned ON
myLEDSwitch.operate(false); // LED LightBulb is turned OFF
