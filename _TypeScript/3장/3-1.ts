// Static 프로퍼티 사용

class Gongsta {
    static totalBullets = 100;

    shoot() {
        Gongsta.totalBullets--;
        console.log(`Bullets left: ${Gongsta.totalBullets}`);
    }
}

const g1 = new Gongsta();
g1.shoot();

const g2 = new Gongsta();
g2.shoot();