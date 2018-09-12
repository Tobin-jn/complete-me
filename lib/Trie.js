const Node = require('./Node');

module.exports = class Trie {
  constructor () {
    this.words = 0;
    this.root = new Node();
  }

  count() {
    return this.words;
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

    if (!currentNode.children[lettersArray[0]]) {
      currentNode.children[lettersArray[0]] = new Node(); 
    }  
      
    currentNode = currentNode.children[lettersArray.shift()];
    
    return this.insertRecursive (lettersArray, currentNode, word);
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
    // console.log('final', finalArr)
    return finalArr;
    // console.log(finalArr)
  }

  suggestRecursive(currentNode, finalArr) {

    if (currentNode.word) {
      finalArr.push(currentNode.word)
    }

    let keys = Object.keys(currentNode.children)

    keys.forEach( key => {
      let nextNode = currentNode.children[key]

    this.suggestRecursive(nextNode, finalArr);
    })
  }



  populate(dictionary) {
    dictionary.forEach (word => {
      this.insert(word);
    })
  }
}