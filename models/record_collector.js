const RecordCollector = function (){
  this.records = [];
  this.funds = 0;
};

RecordCollector.prototype.collectorAddRecord = function (record){
  this.records.push(record);
};

RecordCollector.prototype.collectorRemoveRecord = function (record){
  this.records.pop(record);
};

RecordCollector.prototype.collectorAddFunds = function (amount) {
  this.funds += amount;
};

RecordCollector.prototype.collectorRemoveFunds = function (amount) {
  this.funds -= amount;
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const recordByTitle = this.records.filter((record) => {
    return title === record.title;
});
// console.log(recordByTitle);
  return recordByTitle;
};

RecordCollector.prototype.collectorBuyRecord = function (record) {
  if(this.funds > record.price) {
    this.collectorAddRecord(record);
    this.funds -= record.price;
  }
  else
  {
    return false;
  }

};

RecordCollector.prototype.collectorSellRecord = function (record) {
  this.collectorRemoveRecord(record);
  this.funds += record.price;
};


RecordCollector.prototype.sortCollectionByArtistName = function () {
  const artistName = this.records.map((record) => {
    return record.artist;
  });

  return artistName;



}

module.exports = RecordCollector;
