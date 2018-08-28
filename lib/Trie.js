import Node from './node';

export default class Trie {
  constructor () {
    this.totalWords = 0;
    this.root = null;
  }

  //methods go here
  count() {
    return this.totalWords
  }

  insert(word, node = this.root) {
    //where you start, current node
    //input a word

        //add a word to our list
        //could be an issue if the function is recursive
    this.totalWords++;


  if(!this.root){
    this.root = new Node(letter)
  }

    let letterIndex = 0;
    let letter = newWord.charAt(letterIndex);
    let length = newWord.length();


//if the length is 0, node.setEnd -> return


//check first letter, and if it already exists
//if it comes back false, instantiate that new node

//recursively call insert again
//pass in a string, minus the first letter (substr())
//second parameter, location of previous node

//if the letter is already there, inseert the new string
//starting at the previous node



    //identify the first letter, save as variable

    //if that node does not exist as a child, instantiate node
    if(!node.letter) {
      this.root = new Node(letter);
    } else {
      let currNode = this.root

    while(letterIndex < length) {
      currNode = currNode.child
      letterIndex++

      if(!node.letter === letter){
        currNode = new Node(letter);
      }
    }

      if

  }



    //identify second letter- same process

    //repeat until no more letters
  }

  suggest(prefix) {

  }


}