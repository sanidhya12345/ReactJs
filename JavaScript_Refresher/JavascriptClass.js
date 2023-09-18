class Parent{
    constructor(firstname,lastname,age,location,occupation){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.location=location;
        this.occupation=occupation;
   }

   getUserInfo(){
      return `${this.firstname} ${this.lastname} ${this.age} years old from ${this.location} works as ${this.occupation}`;
   }
}

class Child extends Parent{
    constructor(firstname,lastname,age,location,occupation,skills){
        super(firstname,lastname,age,location,occupation);
        this.skills=skills;
    }
    getSkills(){
        return this.skills.length>0?this.skills.join(' '):"No skills found";
    }
}

const skills=['HTML','CSS','Python','Java','C','SQL','React'];
const child=new Child(
    'Sanidhya',
    'Varshney',
    21,
    'Aligarh',
    'Software Developer',
    skills
);

console.log(child.getUserInfo());
