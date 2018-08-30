import { expect } from 'chai';
import fs from 'fs';
import Trie from '../lib/Trie';
import Node from '../lib/Node';


const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

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
    // trie.root = new Node()
    expect(trie.root).to.deep.equal({
      end: false,
      children: {}
    });
  })

  it('should increase words each time we pass in a new word', () => {
    expect(trie.words).to.equal(0);
    trie.insert('hello');
    expect(trie.words).to.equal(1);
  })

  it('should insert word when invoking insert', () => {
    trie.insert('hello');
    trie.insert('dog');
    trie.insert('cat')
    // console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.equal(['h', 'd', 'c'])
  })

  it('should return an array of all possible suggestions', () => {
    trie.insert('hey');
    trie.insert('hello');
    trie.insert('hellen');

    expect (trie.suggest ('he')).to.deep.equal(['hey', 'hello', 'hellen'])
    expect (trie.suggest ('hel')).to.deep.equal(['hello', 'hellen'])
    //add test with 'hel'
  })
    it ('should return an array of all possible suggestions', () => {
    trie.insert ('hellen');
    trie.insert ('hello');
    trie.insert ('hellocopter');
    trie.insert ('hey');
    trie.insert ('hi');

    expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey'])
    expect (trie.suggest ('he')).to.deep.equal(['hellen', 'hello', 'hellocopter', 'hey'])
  })

  it ('should populate when passing in the dictionary', () => {
    expect (trie.count()).to.eq(0);
    trie.populate(dictionary);
    expect (trie.count()).to.eq(235886);
    // console.log(JSON.stringify(trie, null, 4)) 

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