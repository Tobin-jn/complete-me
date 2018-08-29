import Node from './node';

export default class Trie {
  constructor () {
    this.words = 0;
    this.root = new Node();
  }


  count() {
    return this.words
  }

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


  insert(word) {

    let currNode = this.Root
    this.words++;

    if (word.length < 1) {
      currNode.end = true;
      return
    }

    while( currNode ){
      let letter = word.charAt(0);
      let revisedWord = word.subStr(1)

      if (currNode.children[letter]) {
        currNode = currNode.children[letter]
      } else {
        currNode.children[letter] = new Node();
        currNode = currNode.children[letter]
      }
      word = revisedWord
    }
  }
}

