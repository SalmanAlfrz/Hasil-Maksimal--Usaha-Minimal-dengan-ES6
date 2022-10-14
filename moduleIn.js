// import
import {foo, bar, kode} from './moduleEx';

// rename

import {foo as f, bar as b, kode as k} from './moduleEx';

theFooFunc()

export function bar(){
    //...
}
export var x = 123;
export function baz(){
    //...
}

import * as myModule from './moduleEx';

myModule.bar();
myModule.x;
myModule.baz();