export default class Node {
  constructor (letter, end, children = null) {
    this.letter = letter || null;
    this.end = end || false;
    this.children = children;
  }
}