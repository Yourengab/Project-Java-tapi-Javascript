// Variabel
let hargaBrg = document.querySelector(".inputHrg");
const jmlBrg = document.querySelector(".inputJmlh");
const totalText = document.querySelector(".total");
const jmlBayar = document.querySelector(".jmlBayar");
const jmlByr = document.querySelector(".inputByr");
const kembalianText = document.querySelector(".kembalian");
const btnTotal = document.querySelector(".hitungTotal");
const btnKembali = document.querySelector(".hitungKembali");
let nilaiSelect = document.querySelectorAll(".barang");
let select = document.querySelector("#listBarang");
let currency = Intl.NumberFormat("id-ID");

// Menentukan Harga Barang
select.addEventListener("click", () => {
  if (select.value === "Kursi") {
    hargaBrg.value = currency.format(65000);
  }
  if (select.value === "Meja") {
    hargaBrg.value = currency.format(950000);
  }
  if (select.value === "Kipas") {
    hargaBrg.value = currency.format(125000);
  }
  if (select.value === "Lampu") {
    hargaBrg.value = currency.format(23000);
  }
  if (select.value === "Sofa") {
    hargaBrg.value = currency.format(150000);
  }
});
// Menghitung Total Belanja
btnTotal.addEventListener("click", () => {
  const parseJml = parseInt(document.querySelector(".inputJmlh").value);
  const parseHrg = parseInt(document.querySelector(".inputHrg").value);

  if (!!jmlBrg.value && !!hargaBrg.value) {
    totalText.innerText = parseJml * parseHrg;
  } else {
    alert("Masukan Jumlah Barang");
  }
});
// Menghitung Kembalian
btnKembali.addEventListener("click", () => {
  const parseByr = parseInt(document.querySelector(".inputByr").value);
  const parseTotal = document.querySelector(".total").innerText;
  if (jmlByr.value > 0) {
    kembalianText.innerText = parseByr - parseTotal;
  } else if (kembalianText.innerText < 0) {
    alert("Uang kamu kurang!");
  } else if (!jmlByr.value) {
    alert("Masukan jumlah Bayar");
  }
});
console.log(select.innerText);
const [...values] = nilaiSelect.innerText;
const jumlah = values.reduce((n1, n2) => {
  return `${n1 + n2}`;
});
console.log(nilaiSelect.value);
