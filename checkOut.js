

window.onload = function () {
    // Ambil elemen tombol checkout
    let checkoutBtn = document.querySelector("#checkoutBtn");

    // Cek apakah tombol ada dan terhubung
    if (checkoutBtn) {
        console.log("Tombol Checkout ditemukan!");
    }

    // Ambil data produk dari localStorage
    let cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];

    console.log(cartItem); // Periksa apakah cartItems ada di localStorage

    // Cek apakah keranjang kosong
    if (cartItem.length === 0) {
        alert("✅checkout berhasil");
        window.location.href = "./cart.html"; // Redirect jika cart kosong
    }

    // Menampilkan produk di checkout
    let total = cartItem.reduce((accu, el) => accu + el.price * el.quantity, 0);

    // Menampilkan gambar dan informasi produk di checkout
    let productDetailsDiv = document.querySelector("#product-details");

    // Menampilkan semua produk di checkout
    cartItem.forEach((product) => {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img id="product-image" src="${product.imageUrl}" alt="Product Image">
            <div id="product-description">
                <h3 id="product-name">${product.name}</h3>
                <p id="product-price">Harga: Rp${product.price}</p>
                <p id="product-quantity">Jumlah: ${product.quantity}</p>
                <p id="total-price">Total: Rp${product.price * product.quantity}</p>
            </div>
        `;
        productDetailsDiv.appendChild(productDiv);
    });

    // Menampilkan total di checkout
    let totalAmount = document.querySelector("#total-price");
    totalAmount.innerText = `Total: Rp${total}`;

    // Event listener untuk tombol checkout
    checkoutBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah form dikirim secara default
        console.log("Tombol Checkout ditekan!"); // Cek apakah tombol berfungsi

        // Ambil data form
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let phone = document.querySelector("#phone").value;
        let country = document.querySelector("#country").value;
        let province = document.querySelector("#province").value;
        let city = document.querySelector("#city").value;
        let district = document.querySelector("#district").value;
        let street = document.querySelector("#street").value;
        let paymentMethod = document.querySelector("#paymentMethod").value;

        // Validasi form
        if (!firstName || !lastName || !phone || !country || !province || !city || !district || !street || !paymentMethod) {
            alert("Harap lengkapi semua data sebelum checkout.");
            return;
        }

        // Format pesan WhatsApp
        let waMessage = `Halo, saya ingin melakukan checkout dengan detail berikut:\n\n` +
            `📦 *Barang yang dipesan:*\n`;

        cartItem.forEach((el) => {
            waMessage += `- ${el.name} x${el.quantity} = Rp${el.price * el.quantity}\n`;
        });

        waMessage += `\n👤 *Data Pembeli:*\n` +
            `Nama: ${firstName} ${lastName}\n` +
            `No. Telp: ${phone}\n\n` +
            `📍 *Alamat Pengiriman:*\n` +
            `Negara: ${country}\n` +
            `Provinsi: ${province}\n` +
            `Kabupaten/Kota: ${city}\n` +
            `Kecamatan: ${district}\n` +
            `Jalan: ${street}\n\n` +
            `💳 *Metode Pembayaran:*\n${paymentMethod}\n\n` +
            `Total Pembayaran: Rp${total}\n\n` +
            `Terima kasih!`;

        // Encode pesan untuk WhatsApp
        let encodedMessage = encodeURIComponent(waMessage);
        let waLink = `https://wa.me/6282248655686?text=${encodedMessage}`;  // Gantilah dengan nomor yang sesuai

        // Tampilkan notifikasi sukses
        let successMessage = document.createElement("div");
        successMessage.id = "checkoutMessage";
        successMessage.innerText = "✅ Checkout berhasil! Anda akan dialihkan...";
        document.body.append(successMessage);

        // Redirect ke WhatsApp setelah 2 detik
        setTimeout(() => {
            window.location.href = waLink;
        }, 2000);

        // Hapus data keranjang setelah checkout
        localStorage.removeItem("cartItems");

        // Redirect ke index.html setelah 4 detik
        setTimeout(() => {
            window.location.href = "index.html";
        }, 4000);
    });
}
