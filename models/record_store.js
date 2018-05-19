const RecordStore = function(name) {
  this.name = name;
  this.stock = [];
  this.funds = 0;

};

RecordStore.prototype.storeAddFunds = function (amount) {
  this.funds += amount;
};

RecordStore.prototype.storeAddRecord = function (record) {
  this.stock.push(record);
};

RecordStore.prototype.storeRemoveRecord = function (record) {
  this.stock.pop(record);
};

RecordStore.prototype.storeSellRecord = function (record) {
  this.storeRemoveRecord(record);
  this.funds += record.price;
};

RecordStore.prototype.storeBuyRecord = function (record) {
  this.storeAddRecord(record);
  this.funds -= record.price;
};



module.exports = RecordStore;
