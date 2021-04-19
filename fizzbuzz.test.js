const fizzbuzz = require('./fizzbuzz');
describe("fizzbuzz", () => {

    test("Should print an error message if the argument is not a number", () => {
        const expected = "Error: the argument must be a number";
        const result = fizzbuzz("14");
        expect(expected).toBe(result)
    })

    test("Should print 1 if they recive 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);

    });

    test("Should print fizz if they recive 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("Should print fizz if they recive a multiple of 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(6);
        expect(expected).toBe(result);

    });

    test("Should print buzz if ther recive 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    })
    test("Should print buzz if ther recive a multiple of 5", () => {
        const expected = "buzz";
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    })

    test("Should print fizzbuzz if they recive a multiple of 5 and 3", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })





});