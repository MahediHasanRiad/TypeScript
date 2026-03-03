try {
  
} catch (error) {
  if(error instanceof Error){
    console.log(error.message)
  }
  console.log(error)
}