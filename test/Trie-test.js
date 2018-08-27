import { expect } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/Trie';

describe('PREFIX TRIE', () => {
  let node;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a function', () => {
    expect(trie).to.exist
  })

  it('should start with zero elements', () => {
    expect(trie.length).to.eq(0);
  })

});