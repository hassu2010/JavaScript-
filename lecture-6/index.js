  console.log("----------------------------Print numbers from 1 to 20.------------------------------------------");
  
  
  for (let index = 1; index <= 10; index++) {
     console.log(index);
     }
    console.log("--------------------------------Print even numbers from 2 to 20.------------------------------------");
     for (let i = 2; i <= 20; i += 2) {
    console.log(i);
 }
  console.log( "---------------------------Print numbers from 10 to 1 (reverse)-----------------------------------");
 for (let index = 10; index > 0; index--) {
   console.log(index);
     
        
  }
  console.log( "-----------------------------Print the multiplication table of 7.---------------------------------");
     for (let i = 1; i <= 10; i++) {
         console.log(` ${7 * i}`);
    }

console.log("---------------------Star Pyramid---------------------------------");

  for (let i = 1; i <= 6; i++) {
   let star =""; 
  for (let j = 1; j <= i; j++){
    star+="*";
  }
    console.log(star);
}
