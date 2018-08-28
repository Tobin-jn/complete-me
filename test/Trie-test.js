import { expect } from 'chai';

import Trie from '../lib/Trie';

describe('PREFIX TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  })

  it('should default root to null', () => {
    expect(trie.root).to.equal(null);
  })

  it('should increase totalWords each time we pass in a new word', () => {
    expect(trie.totalWords).to.equal(0);
    trie.insert('hello');
    console.log(trie.totalWords)
    expect(trie.totalWords).to.equal(1);
  })

//should return the first letter
//it should see if there is a node for that letter
//it should instantiate a node if one does not exist
//it should move to the second letter
//it should see if there is a node for that letter
//it should move to the next letter if the letter exists
//it should instantiate a node if the letter does not exist
//it should repeat until the length is 0
//it should set the end of the node if it is the last letter



});