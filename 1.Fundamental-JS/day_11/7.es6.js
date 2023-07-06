// Ceritanya, tahun 2015, javascript mengeluarkan fitur fitur baruu
// ini beberapa yang mesti kalian tau

// ============================= 1. Var itu udah gak pernah di pake =======================================

// Let, cuma bisa di declare sekali, kalau var bisa di declare berkali kali.
let fullName = "fikri";
fullName = "kanzun";

// Const, gak bisa di ubah value nya.
const age = 20;

// ============================= 2. Arrow function ===============================
// function penjumlahan(angka1, angka2) {
//   console.log(angka1 + angka2);
// }

// const penjumlahan = () => {
//   console.log(angka1 + angka2);
// };

// ============================ 3 The For/Of Loop ===========================
const names = ["fikri", "kanzun", "budi"];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

for (x of names) {
  console.log(x);
}

var product = [
  { name: "Buku", price: 5000, stok: 200 },
  { name: "Pulpen", price: 3000, stok: 300 },
  { name: "Tipe-x", price: 5000, stok: 50 },
  { name: "Tas", price: 50000, stok: 200 },
  { name: "Penggaris", price: 3000, stok: 100 },
  { name: "Pensil", price: 2000, stok: 200 },
  { name: "Spidol", price: 5000, stok: 200 },
  { name: "Stabilo", price: 10000, stok: 100 },
  { name: "Gunting", price: 10000, stok: 100 },
  { name: "Staples", price: 15000, stok: 30 },
];

for (pro of product) {
  console.log(pro.name + ' Rp. ' + pro.price)
}


// ============================== Other ===============
// https://www.w3schools.com/js/js_es6.asp