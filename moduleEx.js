// export

export function foo(){
    //...
}

export var kode = 123;

var bar = [1,2,3];
export { bar };

// cara lain

function foo(){
    //...
}
var kode = 123;
var bar = [1,2,3];
export { foo, kode, bar };