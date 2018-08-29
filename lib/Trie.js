import Node from './node';

export default class Trie {
  constructor () {
    this.words = 0;
    this.root = new Node();
  }


  insert(word) {
    let currentNode = this.root; 
    let lettersArray = [...word]; 

    this.insertRecursive(lettersArray, currentNode, word); 
    this.words++; 
  }

  insertRecursive(lettersArray, currentNode, word) {
    if (lettersArray.length < 1) {
      currentNode.end = true; 
      currentNode.word = word;
      return;
    } 

    if (currentNode.children[lettersArray[0]]) {
      //use bracket notation to change the value of children to that letter
      currentNode = currentNode.children[lettersArray.shift()]; 
    } else {  
      currentNode.children[lettersArray[0]] = new Node();
      currentNode = currentNode.children[lettersArray.shift()];
    }
    return this.insertRecursive(lettersArray, currentNode, word);
  }

  suggest(input) {
    let completeMe = [...input];
    let currentNode = this.root;
    let finalArr = [];

    while (completeMe.length) {
      if (currentNode.children[completeMe[0]]) {
        currentNode = currentNode.children[completeMe.shift()];
      } else {
        return 'Sorry word not found';
      }
    }
      this.suggestRecursive (currentNode, finalArr);

      console.log(finalArr)
  }

  suggestRecursive(currentNode, finalArr) {
    //baseCase

    if (Object.keys(currentNode.children).length > 1) {
      let keysArr = Object.keys(currentNode.children);
      let checkpoint = currentNode;

      keysArr.forEach (key => {
        currentNode = checkpoint;
        currentNode = currentNode.children[key];
        this.suggestRecursive (currentNode, finalArr)
      })

    } else {
      if (!currentNode.end){
        let key = Object.keys(currentNode.children);
        currentNode = currentNode[key];
        this.suggestRecursive (currentNode, finalArr);
        //this brings us down to a branch

      } else {
        finalArr.push(currentNode.word)
        currentNode.end = !currentNode.end 
        let key = Object.keys(cuurentNode.children);
        if(key.length >= 1) this.suggestRecursive (currentNode, finalArr)
      }
    }
  }
}

//take a suggestion, save into an array of letters
//traverse until the end of the array with the suggestion
//check for end and check for branches
//if end, return word
//else if go to next node
//else if mult. branches, make a checkpoint
//if mult branches go to each branch and repeat previous










//insert a word
//check that there is a length, if not current node end should be false
//increment this.words
//grab the first letter of the word
//save the remaining letters in the word
//loop through each letter until the end
//first see if a node for that letter already exists
//if it does set the current node to that node
//if it doesn't, instantiate a new node 
//set the current node to this new node
//update the word to be the word minus the letter just checked
//loop through to check the next letter



// insert(word) {
  
//   let currNode = this.Root
//   let letter = word.charAt(0);
//   let revisedWord = word.substring(1)
//   this.words++;

//   if (word.length < 1) {
//     currNode.end = true;
//   }

//   while( currNode ){


//     if (currNode.children[letter]) {
//       currNode = currNode.children[letter]
//     } else {
//       currNode.children[letter] = new Node();
//       currNode = currNode.children[letter]
//     }
//     return word = revisedWord
//   }
// }

