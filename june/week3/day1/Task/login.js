document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginName = document.getElementById("loginName").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const userData = JSON.parse(localStorage.getItem("user"));
  const message = document.getElementById("loginMessage");

  if (userData && loginName === userData.name && loginPassword === userData.password) {
    message.textContent = "Login Successfully";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid User";
    message.style.color = "red";
  }
});