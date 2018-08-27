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

  insert(newWord) {
    this.totalWords++;

  }


}