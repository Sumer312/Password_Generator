const characterAmountNumber  = document.querySelector(`#charnumber`) as HTMLInputElement;
const characterAmountSlider = document.querySelector(`#charslider`) as HTMLInputElement;
const includeUppercaseEle = document.querySelector(`#includeUpper`) as HTMLInputElement;
const includeNumberEle = document.querySelector(`#includenumber`) as HTMLInputElement;
const includeSymbolsEle  = document.querySelector(`#includeSymbols`) as HTMLInputElement;
const form = document.querySelector(`#passwordGeneratorForm`)as HTMLFormElement;
const passwordDisplay = document.querySelector(`#passwordDisplay`) as HTMLBodyElement;

const UPPER_CHAR_CODES : Array<any> = arrayFromLowToHigh(65, 90);
const LOWER_CHAR_CODES : Array<any> = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES : Array<any> = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES : Array<any> = arrayFromLowToHigh(33, 47).concat(
   arrayFromLowToHigh(58, 64)).concat(
      arrayFromLowToHigh(91, 96)).concat(
         arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener(`input`,syncNumSlider);
characterAmountSlider.addEventListener(`input`,syncNumSlider);

form.addEventListener(`submit`, (e : Event) : void =>{
   e.preventDefault();
   const charAmount : number = characterAmountNumber.valueAsNumber;
   const includeUppercase : boolean = includeUppercaseEle.checked;
   const includeNumbers : boolean = includeNumberEle.checked;
   const includeSymbols : boolean = includeSymbolsEle.checked;
   const password = generate(charAmount, includeUppercase, includeNumbers, includeSymbols);
   passwordDisplay.innerText = password
   
})

 function syncNumSlider(e : any) : void{
    const value : any = e.target.value;
    characterAmountNumber.value = value;
    characterAmountSlider.value = value;
 };

 function arrayFromLowToHigh(low : number, high : number) : Array<any> { 
   const array : Array<any> = [];
   for(let i : number = low; i <= high; i++){
      array.push(i);
   }
   return array;
 }

 function generate(charAmount : number, includeUppercase : boolean, includeNumbers : boolean, includeSymbols : boolean) : string{
   let charCodes : Array<any> = LOWER_CHAR_CODES;
   if(includeUppercase) charCodes = charCodes.concat(UPPER_CHAR_CODES);
   if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
   if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
   const passwordArray : Array<any> = [];
   for(let i : number = 0; i < charAmount; i++){
      const char : number = charCodes[charCodes.length - Math.floor(Math.random() * charCodes.length + 1)];
      passwordArray.push(String.fromCharCode(char));
   }   
   return passwordArray.join("");
 }