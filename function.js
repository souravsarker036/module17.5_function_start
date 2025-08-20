function hello(){
    console.log("I am function");
}
hello()

function moneybag (){
    var money= 4500;
    console.log("I have " + money + " Taka");
}

moneybag();

function jog(inp1, inp2){
    let sum = inp1 + inp2
    console.log('sum is = ' + sum);
    return sum;
}
// jog(20, 40);

const result = jog(20, 40);
console.log(result);