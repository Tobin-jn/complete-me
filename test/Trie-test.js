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
    expect(trie.totalWords).to.equal(1);
  })

});