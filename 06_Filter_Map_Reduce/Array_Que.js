//  How do you remove duplicates from a javascript array

let myarr1=[1,2,3,4,5,6,7,7,8,9,10,10,3,11,4,12,13,11,14,5,7,11,15,12,16,9,17]
let newarr=[]

// myarr1.filter((item)=>{
//   return newarr.push(item);
// })

for (let i = 0; i < myarr1.length; i++) {
  if(!newarr.includes(myarr1[i])){
    newarr.push(myarr1[i]);
  }
}

console.log(myarr1);
console.log(newarr);