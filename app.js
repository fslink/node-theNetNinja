// console.log('Hello World !');

// setTimeout(function(){
//     console.log('3 seconds passed');
// }, 3000);
let inter = 0;

const timer = setInterval(() => {
    inter += 2;
    console.log(inter + ' seconds passed !');

    if(inter >= 10){
        clearInterval(timer);
    }
}, 2000);