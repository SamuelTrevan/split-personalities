const originalDisorderFormat = "depression|$|Bipolar|$|Manic|$|Anziety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

// first split() the string on the correct delimiter to generate an array of strings. 
//Then you must .join() the array back into a single string, making sure each disorder name is surrounded by a <div> HTML tag.

const disorderArray = originalDisorderFormat.split("|$|")
// console.log(disorderArray)

const htmlItems = disorderArray.join("<\div>\n<div>")
console.log(`<div>${htmlItems}</div>`)