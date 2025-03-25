document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("paket").value = urlParams.get("paket");
    document.getElementById("harga").value = "Rp " + urlParams.get("harga");
});

function sendWhatsApp() {
    let paket = document.getElementById("paket").value;
    let harga = document.getElementById("harga").value;
    let idGame = document.getElementById("idGame").value;
    let server = document.getElementById("server").value;
    
    let message = `Halo, saya ingin order joki ML dengan rincian:
    - Paket: ${paket}
    - Harga: ${harga}
    - ID Game: ${idGame}
    - Server: ${server}
    
    Apakah bisa diproses?`;

    let url = `https://wa.me/6287854851480?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}