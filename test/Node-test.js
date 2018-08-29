import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('p');
  });

  it('should exist', () => {
    expect(node).to.exist;
  })

//expecting some argument to pass in so that we can get the first letter
  it('should take a letter as an argument and assign it to the letter property', () => {
    expect(node.letter).to.equal('p');
  })

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  })

  it('should default children to empty object', () => {
    expect(node.children).to.deep.equal({});
  })
});