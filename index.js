const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
///([A-Za-z])\w+/ig 
const titleCased = () => {
  //return tutorials.map(sentence => sentence.split(' ').map(word => word.replace(myexpres, word[0].toUpperCase()).join(' ')
  return tutorials.map((sentence) => {
    const spaceOut = sentence.split(' ')
    return spaceOut.map((word) => {
      return word[0].toUpperCase() + word.substring(1,word.length)
    }).join(" ")
  })
}


/*tutorials.map(function(title) {
  
  return title.charAt(0).toUpperCase() + title.substring(1,title.length)
  */

//console.log(titleCased)
 /*tutorials.map(title => {
  return title.charAt(0).toUpperCase() + title.substring(1,title.length)
}) */


