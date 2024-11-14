let Student_FName=" Ashutosh"
let Student_LName="Patil"

// String Concatenation:
let Student_Name= Student_LName + Student_FName

console.log(Student_Name);

// String Interpolation

let Student_City="Bangalore"

console.log(`Hi I am ${Student_Name} & I am from ${Student_City} `)

console.log(Student_Name[4])
console.log(Student_Name.__proto__);
console.log(Student_Name.length);
console.log(Student_Name.toUpperCase());
console.log(Student_Name.toLowerCase());
console.log(Student_Name.split());
console.log(Student_Name.split('-'));
console.log(Student_Name.trim());
console.log(Student_Name.charAt(8));
console.log(Student_Name.indexOf('p'));
const surname=Student_Name.substring(0,6); // no negative index
const Studname=Student_Name.substring(6,); // no negative index
// Slice is similar to substring just different thing is that we can give here negative indexing values
console.log(surname)
console.log(Studname)
const newname="  Ashutosh  "
console.log(newname)
console.log(newname.trim()) //removes spaces
console.log(Student_Name.replace('Ashutosh','Ashutosh_Dada'))
console.log(Student_Name.includes('Ashutosh'))
console.log(Student_Name.includes('Dada'))
console.log(Student_Name.includes('_Dada'))
console.log(Student_Name.includes('Ashutosh_Dada'))
console.log(Student_Name.includes('Sri'))
console.log(Student_Name.includes('Patil'))