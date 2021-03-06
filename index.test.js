const fizzBuzz = require('./index');

describe('fizzBuzz()', ()=> {
  
  it('returns "Fizz" for multiple of 3 only', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
  }) 

  it('returns "Buzz" for multiple of 5 only', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  }) 

  it('returns "FizzBuzz" for multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  })

  it('returns the given number for multiples of neither 3 nor 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(22)).toBe('22');
  })
})