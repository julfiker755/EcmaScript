function calculation(...numbers){
    let sum=0;
     for(const i of numbers){
         sum=sum+i;
     }
  console.log(sum)
 }
 // calculation(44,50,55,77)
 
 //onak gula parameter takte pare
 function calculation(a,b,...numbers){
    let sum=0;
     for(const i of numbers){
         sum=sum+i;
     }
  console.log(sum)
 }
 calculation(44,50,10,10)
 