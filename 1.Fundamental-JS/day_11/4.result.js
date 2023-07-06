var product = [
  {name: "Buku", price: 5000, stok: 200},
  {name: "Pulpen", price: 3000, stok: 300},
  {name: "Tipe-x", price: 5000, stok: 50},
  {name: "Tas", price: 50000, stok: 200},
  {name: "Penggaris", price: 3000, stok: 100},
  {name: "Pensil", price: 2000, stok: 200},
  {name: "Spidol", price: 5000, stok:200},
  {name: "Stabilo", price: 10000, stok: 100},
  {name: "Gunting", price: 10000, stok: 100},
  {name: "Staples", price: 15000, stok: 30}
]

// Lihat Barang di Inventory
function lihatBarang () {
  var lihatBarang = "Daftar Barang Yang Tersedia : \n\n";
  for (i=0; i < product.length; i++)
  lihatBarang += `${i+1}. ${product[i].name} harga ${product[i].price} jumlah stok ${product[i].stok}\n`
  return lihatBarang;

}

// Tambah Barang
function tambahBarang (name, price, stok) {
  var productUpdate = product;
  var productTambah = {name: name, price: price, stok: stok};
  productUpdate.push (productTambah);
  return lihatBarang ();

}

// Update Stok
function updateStok (nomorBarang, stok) {
  var productUpdate = product;
  productUpdate [nomorBarang-1].stok += stok;
  return lihatBarang ();

}

// Delete Barang
function deleteBarang (nomerBarang) {
  var productUpdate = product;
  productUpdate.splice(nomerBarang-1,1);
  return lihatBarang ();

}

console.log (lihatBarang())

console.log (tambahBarang("ikan",20000,40))

console.log (updateStok(8,50))

console.log (deleteBarang(9))