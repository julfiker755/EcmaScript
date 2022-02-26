//normal class------------
class student{
    constructor(fristname,lastname,date){
        this.fristname=fristname;
        this.lastname=lastname;
        this.date=date;
    }
    student_profile(){
        // console.log(`Student Name${this.fristname} ${this.lastname} and age ${this.date}`)
        return `Student Name${this.fristname} ${this.lastname} and age ${this.date}`
    }
}

//student profile-1
const student1=new student("Julfiker","Islam","18-04-2002");
console.log(student1)
//student profile-2
const student2=new student("Jim","Islam","18-04-2002");
console.log(student2)
//student profile-3
const student3=new student(" shuvo"," Islam","15-05-1997");






//===============================================================
//advanced class----------
//===============================================================
class student{
    constructor(fristname,lastname,date){
        this.fristname=fristname;
        this.lastname=lastname;
        this.date=date;
    }
    student_profile(){
        // console.log(`Student Name${this.fristname} ${this.lastname} and age ${this.date}`)
        return `Student Name${this.fristname} ${this.lastname} and age ${this.date}`
    }
}

class player extends student{
    constructor(fristname,lastname,date,player){
        super(fristname,lastname,date)
        this.player=player;
    }
    player_profile(){
        return `${student_profile()} Hobby ${this.player}`
    }
}
//player profile-1
const student11=new player("Rana","Islam","23-05-2019","football");
console.log(student11)
//player profile-2
const student12=new player("Jim","Islam","23-05-2019","criket");
console.log(student12)
//student profile
const student13=new student("Apon","Islam","12-05-2002");
console.log(student13)
//student profile
const student14=new student("Apon","Islam","12-05-2002");
console.log(student14)