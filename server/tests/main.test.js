const fn = require('./functions')

// test('this is a test of factorial', () => {
//     expect(typeof (fn.fact(10))).toBe('number')
// })

// describe('this is a set (suite) of tests', () => {
//     test('this is a test of factorial', () => {
//         expect(typeof (fn.fact(10))).toBe('number')
//     })
//     test('this tests addFact', function(){
//         expect( fn.addFact(fn.fact(5)) ).toEqual(420)
//     })
// })



// ===== BEFORE ALL ===== //

let arg = []

beforeAll( () => {
    for (var i = 0; i < 30; i++){
        arg.push( ~~(Math.random() * 500) + 1 )
    }
})

test('testing the new function', () => {
    expect( (fn.log(arg).length) ).toEqual(30)
})