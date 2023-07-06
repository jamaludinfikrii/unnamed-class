// function hitungUmur(tahunLahir) {
//   var umur = 2023 - tahunLahir;
//   return `Lahir tahun ${tahunLahir}, umur sekarang ${umur}`;
// }
// console.log(hitungUmur(1997));

// function hitungJamParkir(jam) {
//   var bayarParkir = 2000 * jam;
//   return `Anda parkir selama ${jam} jam, total bayar parkir : ${jam} x Rp. 2000 = Rp. ${bayarParkir}`;
// }
// console.log(hitungJamParkir(5));

// TUGAZZZZZ
// hitungAlphabet('abc') ==> 1 +  2 + 3 = 6
// hitungAlphabet('cda') ==> 3 + 4 + 1 = 8

function position(letter) {
  var alfa = "abcdefghijklmnopqrstuvwxyz";
  return alfa.indexOf(letter) + 1;
}

function penjumlahan(str) {
  var str2 = [];
  for (i = 0; i < str.length; i++) str2.push(position(str.charAt(i)));

  var jmlstr2 = 0;
  for (x = 0; x < str2.length; x++) jmlstr2 += str2[x];
  return jmlstr2;
}

console.log(penjumlahan("abc"));

// hitungHari('senin',2) ==> rabu
// hitungHari('minggu',3) ==> rabu

function hariMaju(hari, n) {
  var hariarr = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
    "Minggu",
  ];
  var jmlHari = hariarr.length;

  var sisaHari = n % jmlHari; // 5
  var hariConvert = hariarr.indexOf(hari) + 1; // 1
  var resultHari = sisaHari + hariConvert; // 5 + 1 = 6

  if (resultHari === jmlHari) {
    var resultHariN = resultHari - 1; // -
  } else {
    var resultHariN = (resultHari % jmlHari) - 1; // 5 - 1 = 4
  }
  return (resultHariName = hariarr[resultHariN]);
}
console.log(hariMaju("Minggu", 6));

// alphaForward('abc',2) ==> cde
// alphaForward('kanzun',1) ==> lboavo

function alphaForward(str, n) {
  var alfa = "abcdefghijklmnopqrstuvwxyz";
  var jmlAlfa = alfa.length;

  var sisan = n % jmlAlfa; // 2
  var str2 = []; // [1,2,3]
  for (i = 0; i < str.length; i++) str2.push(position(str.charAt(i)) + n);

  var resultalfa = "";
  for (x = 0; x < str2.length; x++)
    resultalfa += alfa.charAt((str2[x] - 1) % jmlAlfa);
  return resultalfa;
}
console.log(alphaForward("jamal", 3));
