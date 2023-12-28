try{
    const data = 202308;
    console.log(data);
    abc;
}
catch(error){
    console.log(`${error.name}: ${error.message}`) //error.message error.stack error.name
}
finally{
    throw new Error("Finally executed")
}

    // const data = 202308;
    // abc;
    // console.log(data);