
function trim() {
    const str = "  hello world  ";
    const ab = str.trim();
    console.log(ab)
} trim()

function lowecase(){
    const word="HELLO WORLD";
    const casee = word.toLowerCase() 
    console.log(casee)
}lowecase()

function upcase(){
    const wording="hello everyone";
    const neword = wording.toUpperCase() 
    console.log(neword)
}upcase()


module.exports.trim1=trim;
module.exports.lower1=lowecase;
module.exports.upcase1=upcase;