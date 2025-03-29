function calculate() {
    let jam = [
        parseInt(document.getElementById('jam1').value) || 0,
        parseInt(document.getElementById('jam2').value) || 0,
        parseInt(document.getElementById('jam3').value) || 0,
        parseInt(document.getElementById('jam4').value) || 0
    ];
    let gaji = parseFloat(document.getElementById('gaji').value) || 0;
    let total = 0;

    for (let i = 0; i < 4; i++) {
        let harga = (1.5 * gaji / 173) + (i * (2 * gaji / 173));
        total += harga * jam[i];
    }

    let formattedTotal = `Rp ${Math.round(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    document.getElementById('modalText').innerText = `Total Lembur: ${formattedTotal}`;
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
