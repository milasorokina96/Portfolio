function getNumber(text, minValue, maxValue) {
  let amount;
  do {
    amount = parseInt(prompt(text));
  } while (isNaN(amount) || amount < minValue || amount > maxValue);

  return amount;
}

function getText(text) {
  let name;
  do {
    name = prompt(text);
  } while (!(name && isNaN(name)));

  return name;
}

function getYear(text, minValue, maxValue) {
  let year;
  do {
    year = parseInt(prompt(text));
  } while (isNaN(year) || year < minValue || year > maxValue);

  return year;
}
