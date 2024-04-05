import React, { useState } from 'react'

const AutoCorrect = ({correction}) => {

   
console.log(Object.keys(correction));

    let [word,setWord]=useState("")

const space = (event) => {
  const inputWord = event.target.value;

  // Update the word state
  setWord(inputWord);

  // Check for corrections
 
     if (inputWord.includes(' ')) {
      const words = inputWord.split(' ');
      const correctedWords = words.map((word) => {
        // Check if the word exists in corrections object
        
       if(Object.keys(correction).includes(word)){
          
           return correction[word]  
          
       }
       return word
      });
     setWord(correctedWords.join(' '))
    }
    
  
};



  return (
    <div>
    <input type='text' data-testid="input-box" onChange={space}  value={word}/>
    </div>
  )
}

export default AutoCorrect