//  callback function 

function fetchData(callback){
    setTimeout(()=>{
        callback("Data fetch");
    },1000);
}

fetchData((msg)=>{
    console.log(msg);
});