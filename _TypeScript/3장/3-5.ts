// Person 추상 클래스

abstract class Person2 {
    constructor(public name: string) {};

    changeAddress(newAddress: string) {
        console.log(`Changing address to ${newAddress}`);
    }

    giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }

    promate(percent: number) {
        this.giveDayOff();
        this.increasePay(percent);
    }

    abstract increasePay(percent: number ): void;
}

class Employee2 extends Person2 {
    increasePay(percent: number) {
        console.log(`Increasing the salary of ${this.name} by ${percent}$`);
    }
}

class Contractor extends Person2 {
    increasePay(percent: number) {
        console.log(`Increasing the hourly of ${this.name} by ${percent}$`);
    }
}

const workers: Person2[] = [];

workers[0] = new Employee2('John');
workers[1] = new Contractor('Mary');

workers.forEach(worker => {
    worker.promate(5);
})