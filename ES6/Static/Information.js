class Information {
    name;
    description;
    number = 1;
    constructor(name, description, number) {
      super();
      console.log("lop cha");
      // this.name = name;
      // this.description = description;
      // this.number = number;
    }
    calc(number) {
      return this.number * 3;
    }
  }