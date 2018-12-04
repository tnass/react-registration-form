const LOWERCASE_REGEX = /[a-b]/;
const UPPERCASE_REGEX = /[A-B]/;
const NUMBER_REGEX = /[0-9]/;
const SPECIAL_CHAR_REGEX = /[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/; // shamelessly copied form Stackoverflow

export const minCharValidator = (input, numMinChars = 8) => (input.length >= numMinChars);

export const lowercaseLetterValidator = (input) => (LOWERCASE_REGEX.test(input));

export const uppercaseLetterValidator = (input) => (UPPERCASE_REGEX.test(input));

export const numberValidator = (input) => (NUMBER_REGEX.test(input));

export const specialCharValidator = (input) => (SPECIAL_CHAR_REGEX.test(input));

