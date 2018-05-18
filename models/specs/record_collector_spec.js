const RecordCollector = require('../record_collector.js');
const Record = require('../record.js');
const assert = require('assert');

describe('RecordCollector', function () {
  let record_collector;
  let record1;
  let record2;

  beforeEach(function () {
    record_collector = new RecordCollector();
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
      price: 20
    })
    record4 = new Record({
      title: 'The Beat Goes On',
      artist: 'Scooter',
      genre: 'hardcore',
      price: 20
    })
    records = [record1, record2, record3, record4];

  });

  it('should have no records', function () {
    const actual = record_collector.records.length;
    assert.strictEqual(actual, 0);
  });

  it('should have no funds', function () {
    assert.strictEqual(record_collector.funds, 0);
  });

  it('should be able to add a record to the collection', function () {
    record_collector.addRecord(record1);
    const actual = record_collector.records.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a record from the collection', function () {
    record_collector.addRecord(record1);
    record_collector.addRecord(record2);
    record_collector.removeRecord(record1);
    const actual = record_collector.records.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to add funds', function () {
    record_collector.addFunds(100);
    record_collector.addFunds(100);
    const actual = record_collector.funds;
    assert.strictEqual(actual, 200);
  });

  it('should be able to remove funds', function () {
    record_collector.addFunds(100);
    record_collector.removeFunds(20);
    const actual = record_collector.funds;
    assert.strictEqual(actual, 80);
  });

  it('should be able to find a record by title', function () {
    record_collector.addRecord(record2); //ARRANGE
    record_collector.addRecord(record4);
    const actual = record_collector.findRecordByTitle('The Beat Goes On'); //ACT
    assert.deepStrictEqual(actual, [record4]); //ASSERT
  });

  





});
