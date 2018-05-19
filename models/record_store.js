const RecordStore = function(name) {
  this.name = name;
  this.stock = [];
  this.funds = 0;

};

RecordStore.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordStore.prototype.addRecord = function (record) {
  this.stock.push(record);
};

module.exports = RecordStore;
