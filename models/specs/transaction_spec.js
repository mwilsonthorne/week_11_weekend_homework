const Transaction = require('../transaction.js');
const Record = require('../record.js');
const assert = require('assert');

describe('Transaction', function () {
  let transaction;
  let record1;
  let record2;


  beforeEach(function () {
    transaction = new Transaction({
      buyer: 'Matthew',
      seller: 'Mark'
    });
    record1 = new Record({
      title: 'The Queen Is Dead',
      artist: 'The Smiths',
      genre: 'indie',
      price: 15
    });
    record2 = new Record({
      title: 'The Stone Roses',
      artist: 'The Stone Roses',
      genre: 'indie',
      price: 10
    });

  });

it('should have a buyer', function () {
  const actual = transaction.buyer;
  assert.strictEqual(actual, 'Matthew');
});

it('should have a seller', function () {
  const actual = transaction.seller;
  assert.strictEqual(actual, 'Mark');
});





});
