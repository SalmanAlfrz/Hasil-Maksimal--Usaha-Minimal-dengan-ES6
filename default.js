let Func = (a, b = 10) => a + b

Func(5) // 5 + 10 = 15
Func(5, 20) // 5 + 20 = 25

let NotWork = (a = 10, b) => a + b

NotWork(5) // NaN
