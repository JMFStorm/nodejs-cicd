function GetCurrentDay() {
  const now = new Date();
  return now.getDate();
}

function GetRandomNumberOfTheDay(limit) {
  const useLimit = limit ?? 1000;
  const dateNum = GetCurrentDay();
  return Math.floor((dateNum * 666) % useLimit);
}

module.exports = { GetRandomNumberOfTheDay, GetCurrentDay };
