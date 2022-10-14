console.log( String.raw`Hello\nWorld` ) // Hello\nWorld
console.log(`Hello\nWorld`) // Hello

function showraw(string, ...values) {
    console.log( string )
    console.log( string.raw )
}

String.raw`Hello\nWorld`.length