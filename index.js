// Your code here
class Cat {
  constructor(name, sex){
    this.name=name;
    this.sex=sex;
  }
  speak(){
    if(this.name =="Cat")
    return this.name+" says meow!"
  }
}


class Dog {
  constructor(name, sex){
    this.name=name;
    this.sex=sex;
  }
  speak(){
    if(this.name =="Dog")
    return this.name+" says woof!"
  }
}

class Bird {
  constructor(name, sex){
    this.name=name;
    this.sex=sex;
  }
  speak(){
    if(this.name =="Bird" && this.sex=="male")
    return "It's me! "+this.name+", the parrot!"
    else if(this.name =="Bird")
      return this.name+" says squawk!"
  }
}
let cat = new Cat("Cat","Male")
cat.speak();
Dog.speak();
Bird.speak();
