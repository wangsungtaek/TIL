// MotorVehicle 인터페이스

interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number);
    hank(howLong: number): void;
}

interface Flyable extends MotorVehicle {
    fly(howHigh: number);
    land();
}

interface Swimmable {
    swim(howFar: number);
}

class Car implements MotorVehicle {
    startEngine(): boolean {
        return true;
    }
    stopEngine(): boolean {
        return true;
    }
    brake(): boolean {  
        return true;
    }
    accelerate(speed: number) {
        console.log(`Dirving faster`);
    }
    hank(howLong: number): void {
        console.log(`Beep beep yeah!`);   
    }
}

class SecretServiceCar implements Flyable, Swimmable {
    startEngine(): boolean {
        return true;
    }
    stopEngine(): boolean {
        return true;
    }
    brake(): boolean {
        return true;
    }
    accelerate(speed: number) {
        console.log(`Dirving faster`);
    }
    hank(howLong: number): void {
        console.log(`Beep beep yeah!`);   
    }
    fly(howHigh: number) {
        console.log(`Flying ${howHigh} feet high`);
    }
    land() {
        console.log(`Landing. Fasten your belts`);
    }
    swim(howFar: number) {
        console.log(`Swimming ${howFar} feet`);
    }
}

const car = new Car();
car.startEngine();

const superCar: SecretServiceCar = new SecretServiceCar();
superCar.fly(20);