let  arr;
function solve(eq){
   arr = eq.split(/([+\-\*\/])/).reverse().join("")
  console.log(arr)
  return arr
}