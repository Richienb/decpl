"use strict"

// Based on https://stackoverflow.com/a/9539746/8384910

module.exports = (number) => {
    // Make sure it is a number and use the builtin number -> string.
    number = (Number(number)).toString()

    // Pull out the fraction and the exponent.
    const matches = number.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)

    // If the number was NaN, Infinity or an integer.
    // We arbitrarily decide that Infinity is integral.
    if (!matches) return 0

    // Count the number of digits in the fraction and subtract the exponent to simulate moving the decimal point left by exponent places.
    return Math.max(0, (matches[1] === "0" ? 0 : (matches[1] || "").length) - (matches[2] || 0))
}
