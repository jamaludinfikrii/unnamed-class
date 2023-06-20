/**
 *
 * Object
 * - Simple nya object itu tempat nyimpan data
 * - Seperti biasa, tempat nyimpen data = harus ngerti cara CRUD
 *  - Create, Read, Update, Delete
 * - Kenapa butuh object
 *  - Gak pake object sebenernya bisa, cuman beberapa case itu lebih enak pake object
 *
 */

// Create
var obj1 = {
  property: "value",
};
var siswa = {
  namaLengkap: "Kanzun Bairuha",
  umur: 20,
  gender: "lelaki",
};

// Read nya gimana?
console.log(siswa);
console.log(siswa.namaLengkap);
console.log(siswa.umur);
console.log(siswa["gender"]);

// Update
siswa.namaLengkap = "Alfin";

// Delete
delete siswa.namaLengkap;
console.log("deleted");
console.log(siswa);

siswa = null;
console.log(siswa);

// Biasanya object itu di combine sama array
// namanya array of object
var siswas = [
  { nama: "kanzun", umur: 20, gender: "lk" },
  { nama: "alfin", umur: 30, gender: "lk" },
  { nama: "budi", umur: 21, gender: "lk" },
];

var text = "";
for (var i = 0; i < siswas.length; i++) {
  text += siswas[i].nama + ' punya umur ' +  siswas[i].umur + ' dan berjenis kelamin ' + siswas[i].gender + ' \n'
}

console.log(text)
