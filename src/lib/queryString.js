module.exports.queryString = obj => {
  let entries = Object.entries(obj).map(item => {
    return `${item[0]}=${item[1]}`;
  });
  return entries.join('&');
};
