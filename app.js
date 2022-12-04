var characterAmountNumber = document.querySelector("#charnumber");
var characterAmountSlider = document.querySelector("#charslider");
var includeUppercaseEle = document.querySelector("#includeUpper");
var includeNumberEle = document.querySelector("#includenumber");
var includeSymbolsEle = document.querySelector("#includeSymbols");
var form = document.querySelector("#passwordGeneratorForm");
var passwordDisplay = document.querySelector("#passwordDisplay");
var UPPER_CHAR_CODES = arrayFromLowToHigh(65, 90);
var LOWER_CHAR_CODES = arrayFromLowToHigh(97, 122);
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
characterAmountNumber.addEventListener("input", syncNumSlider);
characterAmountSlider.addEventListener("input", syncNumSlider);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var charAmount = characterAmountNumber.valueAsNumber;
    var includeUppercase = includeUppercaseEle.checked;
    var includeNumbers = includeNumberEle.checked;
    var includeSymbols = includeSymbolsEle.checked;
    var password = generate(charAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
});
function syncNumSlider(e) {
    var value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountSlider.value = value;
}
;
function arrayFromLowToHigh(low, high) {
    var array = [];
    for (var i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
function generate(charAmount, includeUppercase, includeNumbers, includeSymbols) {
    var charCodes = LOWER_CHAR_CODES;
    if (includeUppercase)
        charCodes = charCodes.concat(UPPER_CHAR_CODES);
    if (includeNumbers)
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSymbols)
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    var passwordArray = [];
    for (var i = 0; i < charAmount; i++) {
        var char = charCodes[charCodes.length - Math.floor(Math.random() * charCodes.length + 1)];
        passwordArray.push(String.fromCharCode(char));
    }
    return passwordArray.join("");
}
