let loginBtn = document.querySelector("#login");
console.log(loginBtn);
let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if(isAuth !== "Authenticated"){
    window.location.href ="./login.html";
}else{
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click",function(){
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    })
}

let arrData = [
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Men",
        rating: 4.4,
        price: 549.00,
        strikedPrice: 849.00

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=250",
        title: "EAU DE PARFUM FOR ALL",
        name: "OUD GOLD - 100ml",
        rating: 4.8,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_6a04b651-9474-465d-85fc-8fa5d2f25e34.jpg?v=1712926113&width=300",
        title: "EAU DE PARFUM",
        name: "OUD PARFUME",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 899.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Perfume Gift Set For Women",
        rating: 4.9,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/UnisexPerfumeGiftSet_1.jpg?v=1695204331&width=250",
        title: "EAU DE PARFUM",
        name: "Luxury Unisex Perfume Gift Set",
        rating: 4.6,
        price: 549.00,
        strikedPrice: 849.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/WhiteOUD_b00b288c-016d-4071-b71c-f7e9a2cef50f.jpg?v=1698837551&width=250",
        title: "EAU DE PARFUM",
        name: "White Oud Unisex - 100ml",
        rating: 4.7,
        price: 565.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DATEWOMAN.jpg?v=1693290911&width=250",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "Date Woman Perfume - 100ml",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/BestOfMenPerfumeCombo-100mlX3.jpg?v=1693932739&width=250",
        title: "PERFUME COMBO",
        name: "Best Of Men Perfume Combo",
        rating: 4.7,
        price: 1549.00,
        strikedPrice: 2697.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Work-_-play-combo.jpg?v=1693930256&width=300",
        title: "EAU DE PARFUM",
        name: "Work & Play Parfume",
        rating: 4.8,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_ac53b892-f2c6-4add-af46-bd760a0ac0f6.jpg?v=1714554743&width=300",
        title: "EAU DE PARFUM FOR WOMEN",
        name: "SKAI AQUATIC",
        rating: 4.6,
        price: 840.00,
        strikedPrice: 1099.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/OUDParfum.jpg?v=1693289126&width=250",
        title: "PARFUM",
        name: "Oud Unisex Luxury Perfume - 100ml",
        rating: 4.7,
        price: 575.00,
        strikedPrice: 999.00,

    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/KLUBMan.jpg?v=1693289090&width=250",
        title: "EAU DE PARFUM FOR MEN",
        name: "Klub Man - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 799.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Hot-_-classy-2_2.jpg?v=1707985653&width=300",
        title: "Women Parfum",
        name: "Hot & classy parfume",
        rating: 4.8,
        price: 599.00,
        strikedPrice: 747.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/HoneyOUD_68b92490-5598-445c-a661-4a2d978e9893.jpg?v=1693289057&width=250",
        title: "PARFUM",
        name: "Honey Oud Unisex Perfume - 100ml",
        rating: 4.6,
        price: 575.00,
        strikedPrice: 999.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Skai_2e0d54be-3ab0-458b-a2af-47d666c93e0e.jpg?v=1693289226&width=250",
        title: "EAU DE COLOGNE",
        name: "Skai Aquatic Unisex Perfume - 100ml",
        rating: 4.9,
        price: 489.00,
        strikedPrice: 699.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/download_7e6fb342-20d2-42be-8b82-ca93a466d61f.jpg?v=1732892400&width=300",
        title: "EU DE PARFUM ",
        name: "Magnetic women parfum",
        rating: 4.9,
        price: 99.00,
        strikedPrice: 275.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_92a228dc-5e9f-46c8-904c-639ced494ab7.jpg?v=1712925686&width=300",
        title: "EAU DE PARFUME",
        name: "DATE WOMEN PARFUME",
        rating: 4.8,
        price: 175.00,
        strikedPrice: 249.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_cb06be68-2b91-4837-8a22-b4f966d3af8f.jpg?v=1712926256&width=300",
        title: "UNDER EYE CREAM FOR WOMEN AND MEN",
        name: "ROSE WOMEN PARFUME-100ml",
        rating: 4.8,
        price: 240.00,
        strikedPrice: 325.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_25f79680-b265-4423-b0c2-bdf6af78b69a.jpg?v=1700137801&width=300",
        title: "TOUCH SKAI",
        name: "TOUCH SKAI PARFUME 20gm",
        rating: 4.8,
        price: 249.00,
        strikedPrice: 450.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_8d732791-3e34-4031-8cf4-042b9de57576.jpg?v=1712925861&width=300",
        title: "GLAM PARFUME",
        name: "GLAM PARFUM - 30ml",
        rating: 4.9,
        price: 249.00,
        strikedPrice: 599.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Perfume-Trial-Pack-_10-5ml.jpg?v=1693930900&width=250",
        title: "PACK OF 10 X 5ML PERFUMES.",
        name: "Luxury Perfume Trial Pack",
        rating: 4.8,
        price: 349.00,
        strikedPrice: 399.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/EverreadyWomenCombo.jpg?v=1693931485&width=250",
        title: "5 PREMIUM FEMININE SCENTS",
        name: "Everready Women Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4695.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/RefreshingYouCombo.jpg?v=1693930765&width=250",
        title: "FAMILY COMBO",
        name: "Refreshing You Combo",
        rating: 4.5,
        price: 2249.00,
        strikedPrice: 4595.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_220a156c-771a-44f2-89a7-b8eb33e6e91c.jpg?v=1712925942&width=300",
        title: "IMPACT men parfume",
        name: "IMPACT men parfume -100ml",
        rating: 4.3,
        price: 349.00,
        strikedPrice: 398.00,
    },
    {
        imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_a6db24c7-0a14-4d1c-b5aa-04868da6613b.jpg?v=1712926368&width=300",
        title: "WHITE OUD",
        name: "WHITE OUD PARFUME 50ml",
        rating: 4.9,
        price: 249.00,
        strikedPrice: 399.00,
    },
];


let container = document.querySelector("#content");
let productNumber = document.querySelector("#productNumber");
productNumber.innerText = `${arrData.length} products`;


function appendData(arrData){
    container.innerHTML = "";
arrData.forEach(function(el){
    // console.log(el);
    let productDiv = document.createElement("div");
    let img = document.createElement("img")
    img.src=el.imageUrl;
    img.style.cursor = "pointer";
    img.addEventListener("click",function(){
        showProduct(el);
        // console.log(el);
    })
    let p1 = document.createElement("p")
    p1.innerText = el.title
    let h4 = document.createElement("h4");
    h4.innerText = el.name;
    h4.setAttribute("class","hide-text")
    let ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class","rating")
    let ratingP = document.createElement("p");
    ratingP.setAttribute("class","material-icons")
    ratingP.innerText = "star"
    let p2 = document.createElement("p");
    p2.innerText = el.rating;
    let span1 = document.createElement("span");
    span1.innerText = `Rp${el.price}`
    let span2 = document.createElement("span");
    span2.innerText = `Rp${el.strikedPrice}`;
    span2.style.textDecoration = "line-through";
    let btn = document.createElement("button")
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click",function(){
        alert("✅Added to cart");
        addToCart(el);
    })  

    ratingDiv.append(ratingP,p2)
    productDiv.append(img,p1,h4,ratingDiv,span1,span2,btn);
    container.append(productDiv);
})

}
appendData(arrData)

let select = document.querySelector("#sort");
select.addEventListener("change",function(){
    arrData.sort(function(a,b){
        if(select.value == "lowToHigh"){
            return(a.price - b.price)
        }
        else if(select.value == "highToLow"){
            return(b.price - a.price);
        }
    })
    appendData(arrData);
})

function showProduct(el){
    localStorage.setItem("showProduct",JSON.stringify(el));
    window.location.href = "./showProduct.html";
}

function addToCart(el) {
    // Ambil data keranjang yang ada di localStorage, jika tidak ada, inisialisasi array kosong
    let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Cek apakah produk sudah ada di keranjang
    let existingProduct = cartArr.find(function(item) {
        return item.imageUrl === el.imageUrl;  // Bandingkan berdasarkan imageUrl atau ID produk
    });

    if (existingProduct) {
        // Jika produk sudah ada, update quantity
        existingProduct.quantity += 1;  // Tambah quantity
    } else {
        // Jika produk belum ada, tambahkan produk baru ke keranjang
        el.quantity = 1;  // Inisialisasi quantity produk pertama kali
        cartArr.push(el);
    }

    // Simpan keranjang yang telah diperbarui ke localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    
    // Menampilkan alert bahwa produk sudah ditambahkan ke keranjang
    // alert("Added to cart");
    
    // Memperbarui total amount di halaman keranjang
    updateCartTotal();
}

// console.log(newArr)