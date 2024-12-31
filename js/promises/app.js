function asyncFunc1() {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            console.log("fetching data1");
            resolve("success");
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            console.log("fetching data2");
            resolve("success");
        }, 4000)
    })
}

asyncFunc1().then((res) => {
    console.log(res);
    asyncFunc2().then((res) =>{
        console.log(res);
    })
})
