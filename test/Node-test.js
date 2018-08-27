import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('hello');
  });

  it('should be a function', () => {
    expect(node).to.exist;
  })

  it('should take a letter as an argument and assign it to the letter property', () => {
    expect(node.letter).to.equal('f');
  })

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  })

  it('should default children to null', () => {
    expect(node.children).to.equal(null);
  })
});