function GetRandomNumber(limit) {
  const now = new Date();
  const dateNum = now.getDate();
  return Math.floor((dateNum * 666) % (limit ?? 0));
}

module.exports = { GetRandomNumber };
