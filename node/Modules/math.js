// function add(a, b)
// {
//    return a+b
// }

// function sub(a, b) {
//     return a-b
// }

// we also need to export the function otherwise it will be just an empty array
// module.exports = "Anamika" : in this case the variable where we use math have value Anamika because that is what we exported
// module.exports = {
//     add:"addfn",
//     sub : "subfn"
// }

// module.exports = {
//     add,sub
// }



// We can also export using lambda functions like ---

exports.multiply = (a, b) => { a * b }
