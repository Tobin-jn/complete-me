import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';


describe('PREFIX TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist
  })

  it('should start with zero elements', () => {
    expect(trie.words).to.equal(0);
  })

  it('should default root to a new Node', () => {
    expect(trie.root).to.deep.equal({
      end: false,
      children: {}
    });
  })

  it('should increase number of words each time we pass in a new word', () => {
    expect(trie.words).to.equal(0);
    trie.insert('hello');
    expect(trie.words).to.equal(1);
  })

  it('should insert word when invoking insert', () => {
    trie.insert('hello');
    trie.insert('dog');
    trie.insert('cat');
    // console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.equal(['h', 'd', 'c'])
  })

  it('should have object values after a node is created', () => {
    trie.insert('dog');
    // console.log(JSON.stringify(trie, null, 4))
    expect(trie.root.children.d).to.deep.equal({
      end: false,
      children: {
                  o: {
                    end: false,
                    children: {
                                g: {
                                  end: true,
                                  children: {},
                                  word: "dog"
                                }
                  }
        }
      }
    })
  })

  it('should return an array of all possible suggestions', () => {
    trie.insert('hey');
    trie.insert('hell');
    trie.insert('hello');
    trie.insert('hellen');
    // console.log(JSON.stringify(trie, null, 4))
    expect (trie.suggest ('he')).to.deep.equal(['hey', 'hell', 'hello', 'hellen'])
    expect (trie.suggest ('hel')).to.deep.equal(['hell', 'hello', 'hellen'])
  })
});