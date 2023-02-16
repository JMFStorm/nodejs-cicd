function GetDateAsNum() {
  const now = new Date();
  return now.getDate();
}

module.exports = { GetDateAsNum };
