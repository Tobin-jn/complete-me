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

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  })

  it('should default children to empty object', () => {
    expect(node.children).to.deep.equal({});
  })

  it('should have a word property', () => {
    expect(node.word).to.equal(undefined);
  })

});