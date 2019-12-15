/**
 * Get the amount of decimal places in a number.
 * @param number The number to process.
 * @example
 * ```
 * const decpl = require("decpl");
 *
 * decpl(5555.0);
 * //=> 0
 *
 * decpl(5555);
 * //=> 0
 *
 * decpl(555.5);
 * //=> 1
 *
 * decpl(555.50);
 * //=> 1
 *
 * decpl(0.0000005);
 * //=> 7
 *
 * decpl(5e-7);
 * //=> 7
 *
 * decpl(0.00000055);
 * //=> 8
 *
 * decpl(5.5e-7);
 * //=> 8
 * ```
*/
declare function decpl(number: number): number;

export = decpl;
