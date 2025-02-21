let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    let userDetail = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    // Store user details in localStorage
    localStorage.setItem("userDetail", JSON.stringify(userDetail));

    // Show a success message
    alert("Account created successfully!");

    // Optionally, you can redirect the user to the login page after account creation
    window.location.href = "./login.html"; // Uncomment if you want to redirect to login page
});
