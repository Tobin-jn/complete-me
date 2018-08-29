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
      currentNode.word = word
      return;
    } 

    if (currentNode.children[lettersArray[0]]) {
      currentNode = currentNode.children[lettersArray.shift()]; 
    } else {  
      currentNode.children[lettersArray[0]] = new Node();
      currentNode = currentNode.children[lettersArray.shift()];
    }
    return this.insertRecursive(lettersArray, currentNode, word);
  }

  count(){
    return this.words
  }

  suggest() {

  }

}

  //take a suggestion, save into an array
  //traverse node with a counter- stop traversing because we will return suggestions after the first two letters
  //check for multiple children or end - will be an end or a checkpoint(a branch starts)
  //if multiple children-> new checkpoint
  //else if end save to return array
  //go back to checkpoint





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
  //   this.words++;

  //   if (word.length < 1) {
  //     currNode.end = true;
  //     return
  //   }

  //   while( currNode ){
  //     let letter = word.charAt(0);
  //     let revisedWord = word.subStr(1)

  //     if (currNode.children[letter]) {
  //       currNode = currNode.children[letter]
  //     } else {
  //       currNode.children[letter] = new Node();
  //       currNode = currNode.children[letter]
  //     }
  //     word = revisedWord
  //   }
  // }


