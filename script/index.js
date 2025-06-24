
function toggleMenu() {
        document.getElementById('menubar').classList.toggle('active');
}



//contact us form
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (!email || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!message) {
        document.getElementById("messageError").textContent = "Message cannot be empty";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
}

document.getElementById('submit').addEventListener('click', function() {
    alert('Form submitted successfully!');
})
