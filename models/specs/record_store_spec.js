const RecordStore = require('../record_store.js');
const Record = require('../record.js');
const RecordCollector = require('../record_collector.js')
const assert = require('assert');

describe('RecordStore', function () {
  let recordstore;
  let record1;
  let record2;
  let record3;
  let record4;


  beforeEach(function ()  {
    recordstore = new RecordStore('Assai Records');
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
    record3 = new Record({
      title: 'Ambient Works',
      artist: 'Aphex Twin',
      genre: 'electro',
      price: 5
    });
    record4 = new Record({
      title: 'Ambient Works Vol2',
      artist: 'Aphex Twin',
      genre: 'electro',
      price: 5


    });


  });

it('should have a name', function(){
  const actual = recordstore.name;
  assert.strictEqual(actual, 'Assai Records');
});

it('should have no records', function(){
  const actual = recordstore.stock.length;
  assert.strictEqual(actual, 0);
});

it('should have no funds', function(){
  const actual = recordstore.funds;
  assert.strictEqual(actual, 0);
});

it('should be able to add funds', function(){
  recordstore.storeAddFunds(100);
  recordstore.storeAddFunds(50);
  const actual = recordstore.funds;
  assert.strictEqual(actual, 150);
});

it('should be able to add a record to the collection', function () {
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  const actual = recordstore.stock.length;
  assert.strictEqual(actual, 2);
});

it('should be able to remove a record from its collection', function() {
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  recordstore.storeRemoveRecord(record1);
  const actual = recordstore.stock.length;
  assert.strictEqual(actual, 1);
});

it('should be able to sell a record from its stock', function(){
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  recordstore.storeSellRecord(record1);
  recordstore.storeSellRecord(record2);
  const actual = recordstore.funds;
  assert.strictEqual(actual, 25);
});

it('should be able to buy a record from a collector', function() {
  recordstore.storeAddFunds(100);
  recordstore.storeBuyRecord(record1);
  recordstore.storeBuyRecord(record2);
  const actual = recordstore.funds;
  assert.strictEqual(actual, 75);
});

it('should be able to find all records which match a given genre', function() {
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  recordstore.storeAddRecord(record3);
  const expected = [record1, record2];
  const actual = recordstore.findRecordsByGenre('indie');
  assert.deepStrictEqual(actual, expected);
});

it('should be able to find all records which match a given title', function(){
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  recordstore.storeAddRecord(record3);
  const actual = recordstore.findRecordsByTitle('The Stone Roses');
  assert.deepStrictEqual(actual, [record2]);

});

it('should be able to find all records which match a given artist', function () {
  recordstore.storeAddRecord(record1);
  recordstore.storeAddRecord(record2);
  recordstore.storeAddRecord(record3);
  recordstore.storeAddRecord(record4);
  const actual = recordstore.findRecordsByArtist('Aphex Twin');
  assert.deepStrictEqual(actual, [record3, record4]);
});






















});
