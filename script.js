
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Message sent successfully! We will get back to you shortly.");
    document.getElementById("contactForm").reset(); 
});


document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function addToCart() {
    
    alert("The LEGO set has been added to your cart!");
    
}


function changeImage(imageUrl) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageUrl;

    mainImage.classList.add('clicked');

    
    setTimeout(() => {
        mainImage.classList.remove('clicked');
    }, 3000);
}

function addToCart() {
    alert("The LEGO set has been added to your cart!");
    
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;

    alert(`Thank you for your purchase, ${name}!\nYour order will be shipped to ${address}.\nPayment Method: ${paymentMethod}`);

    
    window.location.href = 'confirmation.html';
});

const orderNowButton = document.getElementById('order-now-btn');


const quantityInput = document.getElementById('quantity');


orderNowButton.addEventListener('click', () => {
    const quantity = quantityInput.value;
    localStorage.setItem('lego-quantity', quantity);  
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownList = document.querySelector(".dropdown-list");

    // Toggle dropdown on click
    dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        dropdownList.style.display =
            dropdownList.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            dropdownList.style.display = "none";
        }
    });
});
