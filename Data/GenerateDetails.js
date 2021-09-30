export function gen_salary (){
    let random_salary = Math.floor(Math.random() * 10000);
    return '' + random_salary;
}

export function gen_age (){
    var ages =["20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"
    ,"41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65"];
    return ages[Math.floor(Math.random()*ages.length)];
}

export function gen_dept(){
    var Depts =["Network" , "Mobile" , "Web" , "DevOps" ,"QA","Backend","Front-end","FullStack","Engineering","Multimedia"];
    return Depts[Math.floor(Math.random()*Depts.length)];
}
export function gen_state(){
    var states = ["NCR" ,"Uttar Pradesh","Haryana","Rajasthan"]
    return states[Math.floor(Math.random()*states.length)];
}

export function gen_subject(){
    var subjects = ["Biology","Computer Science","Accounting","Economics","Social Studies","History","Civics","Hindi","English","Physics","Chemistry","Commerce","Maths","Arts"];
    return subjects[Math.floor(Math.random()*subjects.length)];
}

export function gen_randomPic(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
export function gen_color(){
    var colors = ["Red","Green","Blue","Black","Aqua","Purple","Magenta","Yellow","White","Voilet","Indigo"];
    return colors[Math.floor(Math.random()*colors.length)];
}

export function gen_color_2(){
    var colors_2 = ["Red","Green","Blue","Black"];
    return colors_2[Math.floor(Math.random()*colors_2.length)];
}


export function gen_menuOptions(){
    var Options = ["Group 1, option 1" ,"Group 1, option 2" ,"Group 2, option 1","Group 2, option 1","A root option","Another root option"];
    return Options[Math.floor(Math.random()*Options.length)];
}

export function gen_Roles(){
    var Roles = ["Dr." ,"Mr." ,"Mrs.","Ms.","Prof.","Other"];
    return Roles[Math.floor(Math.random()*Roles.length)];
}

export function gen_Cars(){
    var Cars = ["volvo" ,"saab" ,"opel","audi"];
    return Cars[Math.floor(Math.random()*Cars.length)];
}

export function gen_Pass(){

    return  Math.random().toString(36).slice(-8);
}

export function gen_Books(){
    var books = ["Git Pocket Guide","Learning JavaScript Design Patterns","Designing Evolvable Web APIs with ASP.NET","Speaking JavaScript"
    ,"You Don't Know JS","Programming JavaScript Applications","Eloquent JavaScript, Second Edition","Understanding ECMAScript 6"];
    return  books[Math.floor(Math.random()*books.length)];
}

export function gen_Number(){
    var numbers = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return  numbers[Math.floor(Math.random()*numbers.length)];
}

export function gen_Number_2(){
    var numbers = ["One","Two","Three","Four","Five","Six"];
    return  numbers[Math.floor(Math.random()*numbers.length)];
}

export function gen_MultiSelectM(){
    var Ops = ["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];
    return  Ops[Math.floor(Math.random()*Ops.length)];
}