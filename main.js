class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    print() {
      console.log(`Имя - ${this.name}; возраст ${this.age}`);
    }
  }
  
 
  let user = new User('балтабй', 25);
  
  
  user.print(); 
