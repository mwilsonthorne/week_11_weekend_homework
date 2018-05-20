const Transaction = require('../transaction.js');
const RecordCollector = require('../record_collector.js');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');
const assert = require('assert');

describe('Transaction', function () {
  let recordcollector;
  let recordstore;
  let transaction;
  let record1;
  let record2;


  beforeEach(function () {
    recordcollector = new RecordCollector();
    recordstore = new RecordStore('Assai Records');
    transaction = new Transaction({
      buyer: recordcollector,
      seller: recordstore
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
  assert.strictEqual(actual, recordcollector);
});

it('should have a seller', function () {
  const actual = transaction.seller;
  assert.strictEqual(actual, recordstore);
});

it('should be be able to exchange', function () {
  recordstore.storeAddRecord(record1);
  recordcollector.collectorAddFunds(100);
  transaction.exchangeRecord(record1);
  const actual = recordstore.funds;
  assert.strictEqual(actual, 15);
  const total = recordcollector.funds;
  assert.strictEqual(total, 85);



});








});
