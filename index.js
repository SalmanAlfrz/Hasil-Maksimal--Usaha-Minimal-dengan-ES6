// let
var a = 2
{
    let a = 3
    console.log(a) // 3
    a = 4
    console.log(a) // 4
}
console.log(a) // 2

// const
{
    const b = 3
    console.log(b) // 3

    // b = 4 // TypeError: Assignment to constant variable.
}

function f() {
    var x = 1
    let y = 2
    const z = 3
    {
        var x = 100
        let y = 200
        const z = 300
        console.log("x dalam block space adalah ",x) // 100
        console.log("y dalam block space adalah ",y) // 200
        console.log("z dalam block space adalah ",z) // 300
    }
    console.log("x luar block space adalah ",x) // 100
    console.log("y luar block space adalah ",y) // 2
    console.log("z luar block space adalah ",z) // 3
}
f()