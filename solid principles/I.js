// * I - Interface Segregation Principle (ISP)

// * A client should not be forced to depend on interfaces it does not use.


// * ex:- Violation of ISP

// ! Problem: A Worker interface forces the Robot class to implement eat() method, which it does not need.
class Worker {
    work() { }
    eat() { }
}

class Human extends Worker {
    work() {
        console.log("Human is working");
    }
    eat() {
        console.log("Human is eating");
    }
}

class Robot extends Worker {
    work() {
        console.log("Robot is working");
    }
    eat() {
        throw new Error("Robot can't eat");
    }
}



// ? Solution: Split the Worker interface into more specific interfaces.

class Workable {
    work() { }
}

class Eatable {
    eat() { }
}

class Human extends Workable {
    work() {
        console.log("Human is working");
    }
    eat() {
        console.log("Human is eating");
    }
}

class Robot extends Workable {
    work() {
        console.log("Robot is working");
    }
}


