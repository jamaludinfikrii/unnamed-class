// hitungAlphabet('abc') // 6
// pseudo code
// bahasa manusia

// psudocode

// bikin variable counter, buat simpen hasil
// bikin variable alphabet, urut dari a - z
// looping di input buat ambil setiap char
// setiap ambil satu char, cari char itu ada di urutan ke berapa di dalam variable alphabet
// setalah, jumlahkan dengan 1
// setalah itu, simpan satu ke dalam variable counter

// kanzun
function hitungAlphabet(input) { // cbd
  var counter = 0; // 3 + 2 + 4 = 9
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    var urutanChar = alphabet.indexOf(char);
    urutanChar = urutanChar + 1;
    counter += urutanChar;
  }

  return counter;
}
// alphaForward('abc',2) ==> cde

function alphaForward(input, step) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var hasil = "";

  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    var charPos = alphabet.indexOf(char);
    var charPosForwarded = charPos + step;
    charPosForwarded = charPosForwarded % alphabet.length;
    var charResultForwarded = alphabet[charPosForwarded];
    hasil += charResultForwarded;
  }

  return hasil;
}

console.log(alphaForward("xyz", 2));
