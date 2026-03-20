/**
 * i dont not know, but i will diclare when i call
 */
function main(value: unknown){
  if(typeof value === 'string'){
    console.log(value.toUpperCase())
  }
  if(typeof value === 'number'){
    console.log(value)
  }
  if(Array.isArray(value)){
    console.log(value)
  }
}