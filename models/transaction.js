const Transaction = function (options) {
  this.buyer = options.buyer;
  this.seller = options.seller;

};

Transaction.prototype.exchangeRecord = function (record) {
  // console.log("what is my buyer? ", this.buyer);
  this.buyer.collectorBuyRecord(record);
  this.seller.storeSellRecord(record);
};



module.exports = Transaction;
