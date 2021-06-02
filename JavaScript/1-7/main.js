class Taiyaki {
    constructor(taste) {
        this.taste = taste;
    }
    aji() {
        console.log(`中身は${this.taste}です`);
    }
}

let ankoTaiyaki = new Taiyaki('あんこ');
ankoTaiyaki.aji();

let creamTaiyaki = new Taiyaki('クリーム');
creamTaiyaki.aji();

let cheeseTaiyaki = new Taiyaki('チーズ');
cheeseTaiyaki.aji();