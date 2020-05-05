//function normal statement
function sayHello(){
    console.log('Hello !');
}

//callback
function callFunction(func){
    func();
}


//function expression
var sayBye = function(){
    console.log('Bye !');
};

//sayBye();
callFunction(sayBye);