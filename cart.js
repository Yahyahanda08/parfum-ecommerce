let container = document.querySelector("#cart-container");
let totalPriceElement = document.querySelector("#total-price");
let checkoutBtn = document.querySelector("#checkoutBtn");

// Get the cart data from localStorage or initialize an empty array if it's empty
let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to calculate and display the total amount
function updateTotalAmount() {
    let totalAmount = cartArr.reduce(function (accu, el) {
        return accu + (el.price * el.quantity || 0); // Ensure quantity is defined
    }, 0);
    
    // Update the total amount display
    totalPriceElement.innerText = `Rp${totalAmount.toLocaleString()}`;
}

// Function to display all the products in the cart
function displayCartItems() {
    container.innerHTML = "";  // Clear the current cart items displayed
    
    if (cartArr.length === 0) {
        container.innerHTML = "<p>Your cart is empty!</p>"; // Display message if cart is empty
    }

    cartArr.forEach(function (product) {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let img = document.createElement("img");
        img.src = product.imageUrl;

        let name = document.createElement("h4");
        name.innerText = product.name;

        let price = document.createElement("span");
        price.innerText = `Price: Rp${product.price}`;

        let quantity = document.createElement("input");
        quantity.type = "number";
        quantity.value = product.quantity;
        quantity.min = 1;
        quantity.addEventListener("change", function () {
            product.quantity = parseInt(quantity.value);
            localStorage.setItem("cartItems", JSON.stringify(cartArr));
            updateTotalAmount();  // Recalculate total amount when quantity changes
        });

        // Adding size selection with labels
        let sizeOptionsDiv = document.createElement("div");
        sizeOptionsDiv.classList.add("size-options");

        // 50ml Size Option
let size50ml = document.createElement("input");
size50ml.type = "radio";
size50ml.name = `size-${product.imageUrl}`;
size50ml.value = "50ml";
size50ml.checked = product.size === "50ml";
size50ml.addEventListener("change", function () {
    product.size = "50ml";
    product.price = 489;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    updateTotalAmount();
});
size50ml.classList.add("gap");  // Menambahkan gap di input

let label50ml = document.createElement("label");
label50ml.innerText = "50ml";
label50ml.classList.add("gap");  // Menambahkan gap di label

// 200ml Size Option
let size200ml = document.createElement("input");
size200ml.type = "radio";
size200ml.name = `size-${product.imageUrl}`;
size200ml.value = "200ml";
size200ml.checked = product.size === "200ml";
size200ml.addEventListener("change", function () {
    product.size = "200ml";
    product.price = 589;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    updateTotalAmount();
});
size200ml.classList.add("gap");  // Menambahkan gap di input

let label200ml = document.createElement("label");
label200ml.innerText = "200ml (+Rp100)";
label200ml.classList.add("gap");  // Menambahkan gap di label

sizeOptionsDiv.append(size50ml, label50ml, size200ml, label200ml);

        
        // Remove button
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "&#10006;";  // 'X' symbol for remove
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", function () {
            cartArr = cartArr.filter(item => item.imageUrl !== product.imageUrl); // Remove item
            localStorage.setItem("cartItems", JSON.stringify(cartArr));
            displayCartItems();  // Refresh cart display
            updateTotalAmount();  // Recalculate total amount
        });

        productDiv.append(img, name, price, quantity, sizeOptionsDiv, removeBtn);
        container.appendChild(productDiv);
    });

    updateTotalAmount(); // Update the total amount after displaying items
}

// Update the total amount after changes
function updateTotalAmount() {
    let totalAmount = cartArr.reduce(function (acc, item) {
        return acc + (item.price * item.quantity);
    }, 0);
    document.querySelector("#total-price").innerText = `Rp${totalAmount.toLocaleString()}`;
}

// Proceed to Checkout Button functionality
checkoutBtn.addEventListener("click", function () {
    if (cartArr.length > 0) {
        window.location.href = "./checkOut.html"; // Redirect to the checkout page
    } else {
        alert("Your cart is empty! Please add items to proceed.");
    }
});

// Call the function to display cart items on page load
displayCartItems();
