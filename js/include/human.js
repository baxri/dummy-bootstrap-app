export default class Human{
    constructor(name){
        this.name = name;
    }

    changeName(name){
        //
        this.name = name;
    }

    show(){
        console.log(this.name);
    }
}