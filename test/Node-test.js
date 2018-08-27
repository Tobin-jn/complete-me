import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should exist', () => {
    expect(node).to.exist;
  })

//expecting some argument to pass in so that we can get the first letter
  it('should take a letter as an argument and assign it to the letter property', () => {
    expect(node.letter).to.equal('h');
  })

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  })

  it('should default children to null', () => {
    expect(node.children).to.equal(null);
  })
});