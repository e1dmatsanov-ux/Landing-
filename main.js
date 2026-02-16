const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if(email.includes("@")) {
        message.textContent = "Successfully registered!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email!";
        message.style.color = "red";
    }
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
});
