let year = Number("2024");
let check = (year) => (year % 4 == 0
  && year % 100 != 0
  || year % 400 == 0)
  ? "É bissexto" : "Não é bissexto";
console.log(check(year));