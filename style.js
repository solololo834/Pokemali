
let click = 0;

// tampilkan angka awal
document.getElementById("clicks").innerText = click;

// tombol utama
document.getElementById("but").onclick = function () {
  document.querySelectorAll(".vid").forEach(el => {
    el.hidden = false;
  });
};

// klik bola
document.getElementById("ball").onclick = function () {

  click++; // tambah
  document.getElementById("clicks").innerText = click; // update tampilan

  const chance = Math.floor(Math.random() * 100);

  if (chance < 5) {
    alert("AMPUN SUHU");
    document.querySelectorAll(".vid").forEach(el => {
      el.hidden = true;
    });
  } else {
    alert("IZINN MINIMAL BERHASIL LAA");
  }
};

document.getElementById("b").onclick = function(){
  document.getElementById("b").
  innerText = "maaf kalo kesindir"
}
