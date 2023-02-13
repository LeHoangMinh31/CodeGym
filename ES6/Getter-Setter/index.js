class Person {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
  
    setName(val) {
      this.name = val;
    }
    walk() {
      return "walk ";
    }
  }
  
  class Programmer extends Person {
    constructor(language, name) {
      super(name);
      this.language = language;
    }
    getLanguage() {
      return this.language;
    }
  
    setLanguage(val) {
      this.language = val;
    }
    writeCode() {
      return "Code";
    }
  }
  
  Programmer = new Programmer("ReactJS", "Minh");
  