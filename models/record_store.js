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
  if(this.stock.length > 0)
  {
  this.storeRemoveRecord(record);
  this.funds += record.price;
  }
  else
  {
    return false;
  }
};

RecordStore.prototype.storeBuyRecord = function (record) {
  this.storeAddRecord(record);
  this.funds -= record.price;
};

RecordStore.prototype.findRecordsByGenre = function (genre) {
  const findGenre = this.stock.filter((stockitem) => {
    return genre === stockitem.genre;
  });

  return findGenre;

};

RecordStore.prototype.findRecordsByTitle = function(title) {
  const findTitle = this.stock.filter((stockitem) => {
    return title === stockitem.title;

  });

  return findTitle;

};

RecordStore.prototype.findRecordsByArtist = function (artist) {
  const findArtist = this.stock.filter((stockitem) => {
  return artist === stockitem.artist;
  });

  return findArtist;
};

// RecordStore.prototype.findRecordsWithMultipleAttributes = function (attribute1, attribute2) {
//   const findMultiple = this.stock.filter((stockitem) => {
//     return
//   });
//
//
// };







module.exports = RecordStore;
