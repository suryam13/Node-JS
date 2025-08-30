// MODULE JS
// function add(a,b)
// {
//     return a + b;
// }

// export function sub(a,b)
// {
//     return a - b;
// }

// export function multiply(a,b)
// {
//     return a * b;
// }

// export function divide(a,b)
// {
//     return a / b;
// }

// export default add;



// COMMON JS
// module.exports = add;  //adding a single item

//module.exports = {add,sub} // multiple items been exported 

//module.exports = {addfun : add , subfun : sub} // aliasing the function

//exports.add = function add(a,b)
// {
//     return a + b;
// }



exports.add = function add(a,b)
{
    return a + b;
}
exports.sub = function sub(a,b)
{
    return a - b;
}




function mul(a,b)
{
    return a * b;
}

module.exports = mul;