var random_number = Math.floor(Math.random() * 10000);

export function generateEmails(Fname){
    return Fname + random_number+'@test.com';
}


export function generateEmails_2(Funame){
    const Names = Funame.split(" ");
    const regFirstName = Names[0];
    const regLirstName = Names[1];
    return regFirstName + regLirstName +random_number+'@test.com';
}
