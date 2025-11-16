//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * Converts decimal number to binary without using built-in functions
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */

/**
 * Converts a character to its numeric digit value
 * @param {string} char - Single character to convert
 * @returns {number} Numeric value of the character
 */
function charToDigit(char) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < digits.length; i++) {
        if (char === digits[i]) {
            return i;
        }
    }
    return 0;
}

/**
 * Converts a numeric digit to its character representation
 * @param {number} digit - Numeric digit to convert
 * @returns {string} Character representation of the digit
 */
function digitToChar(digit) {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (digit >= 0 && digit < chars.length) {
        return chars[digit];
    }
    return "0";
}

/**
 * Calculates power of a number
 * @param {number} base - Base number
 * @param {number} exp - Exponent
 * @returns {number} Result of base raised to exp
 */
function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result = result * base;
    }
    return result;
}

/**
 * Converts a number string from any base to decimal
 * @param {string} inputNumber - Number string to convert
 * @param {number} inputNumberSystem - Base of the input number
 * @returns {number} Decimal representation
 */
function convertToDecimal(inputNumber, inputNumberSystem) {
    let decimal = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        let digit = charToDigit(inputNumber[i]);
        let multiplier = power(inputNumberSystem, inputNumber.length - i - 1);
        decimal = decimal + digit * multiplier;
    }

    return decimal;
}

/**
 * Validates that a decimal number is valid for conversion
 * @param {number} decimal - Number to validate
 * @throws {Error} If number is invalid
 * @returns {void}
 */
function validateDecimal(decimal) {
    if (decimal === null || decimal === undefined) {
        throw new Error("Input is not defined");
    }

    if (typeof decimal !== "number") {
        throw new Error("Input is not a valid number");
    }

    if (decimal < 0) {
        throw new Error("Negative numbers are not supported");
    }

    let integerCheck = decimal;
    while (integerCheck >= 1) {
        integerCheck = integerCheck - 1;
    }
    if (integerCheck !== 0) {
        throw new Error("Input must be an integer");
    }
}

/**
 * Converts a decimal number to binary string
 * @param {number} decimal - Decimal number to convert
 * @returns {string} Binary representation
 */
function decimalToBinary(decimal) {
    validateDecimal(decimal);

    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    let current = decimal;

    while (current > 0) {
        let remainder = current;
        while (remainder >= 2) {
            remainder = remainder - 2;
        }

        let digit = remainder === 0 ? "0" : "1";
        binary = digit + binary;

        let quotient = 0;
        let temp = current;
        while (temp >= 2) {
            temp = temp - 2;
            quotient = quotient + 1;
        }
        current = quotient;
    }

    return binary;
}

/**
 * Converts a decimal number to decimal string representation
 * @param {number} decimal - Decimal number to convert
 * @returns {string} String representation of the decimal number
 */
function decimalToDecimalString(decimal) {
    if (decimal === 0) {
        return "0";
    }

    let result = "";
    let num = decimal;

    while (num > 0) {
        let remainder = num;
        while (remainder >= 10) {
            remainder = remainder - 10;
        }

        result = digitToChar(remainder) + result;

        let quotient = 0;
        let temp = num;
        while (temp >= 10) {
            temp = temp - 10;
            quotient = quotient + 1;
        }
        num = quotient;
    }

    return result;
}

/**
 * Main conversion function
 * @param {string} inputNumber - Number to convert
 * @param {number} inputNumberSystem - Input number system
 * @param {number} outputNumberSystem - Output number system
 * @returns {string} Converted number
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    let decimal = convertToDecimal(inputNumber, inputNumberSystem);

    if (outputNumberSystem === 2) {
        return decimalToBinary(decimal);
    } else if (outputNumberSystem === 10) {
        return decimalToDecimalString(decimal);
    }

    return "";
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
    return [10, 2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
    return [10, 2];
}