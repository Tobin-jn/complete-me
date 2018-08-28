export default class Node {
  constructor (letter, children = null) {
    this.letter = letter || null;
    this.end = false;
    this.child = child;
  }

  setEnd() {
    this.end = true;
  }
}