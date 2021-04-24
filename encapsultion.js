class Tiger{
    #speed = 100;
    location = 'Shundarban';
    constructor(name){
        this.name = name;
        this.#speed = 150;
    }
    run(){
        console.log(`I am ${this.name}. I am running at ${this.#speed}mph. I live in ${this.location}`);
    }
}
const royal = new Tiger('Royal Bengal');
// royal.#speed = 120;
royal.name = 'Pormanobic Bangle'
royal.location = 'BandarBan'
royal.run();