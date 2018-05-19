const RecordCollector = function (){
  this.records = [];
  this.funds = 0;
};

RecordCollector.prototype.addRecord = function (record){
  this.records.push(record);
};

RecordCollector.prototype.removeRecord = function (record){
  this.records.pop(record);
};

RecordCollector.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordCollector.prototype.removeFunds = function (amount) {
  this.funds -= amount;
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const recordByTitle = this.records.filter((record) => {
    return title === record.title;
});
// console.log(recordByTitle);
  return recordByTitle;
};

RecordCollector.prototype.buyRecord = function (record) {
  //if(statem)
  this.addRecord(record);
  this.funds -= record.price;
};

RecordCollector.prototype.sellRecord = function (record) {
  this.removeRecord(record);
  this.funds += record.price;
};

module.exports = RecordCollector;
