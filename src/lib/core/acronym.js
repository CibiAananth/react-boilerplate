export default (str) => {
  const matches = str.match(/\b(\w)/g); // ['J','S','O','N']
  return matches.join(''); // JSON
};
