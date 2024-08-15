var arr = [1,2,3,4,12]


// forEach
arr.forEach(function (val) {
    val= val+2
})

console.log(arr)


// map :new array equal to original array 
var newarr = arr.map(function (val)
{
    return val+4
})


console.log(newarr)


// Filter : new array less than or equal to original array 
var newarr2 = newarr.filter((val) => { return val > 6 })
console.log(newarr2)


// find : find the first occurance of an element

var ans = arr.find(function (val) {
    if (arr.indexOf(val) == 3)
    {
      return 1
    }
})

console.log("answer = " + ans)


async function trying() {
    
    var ans = await fetch("https://example.org/products.json", { mode: 'no-cors' })
    console.log(ans)

}

trying();