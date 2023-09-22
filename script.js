document.addEventListener("DOMContentLoaded", function () {
    const maintenanceLink = document.getElementById("maintenanceLink");
    const reportsLink = document.getElementById("reportsLink");
    const transactionsLink = document.getElementById("transactionsLink");
    const content = document.getElementById("content");
  
    maintenanceLink.addEventListener("click", function (event) {
      event.preventDefault();
      content.innerHTML = "<h2>Maintenance Module</h2>";
    });
  
    reportsLink.addEventListener("click", function (event) {
      event.preventDefault();
      content.innerHTML = "<h2>Reports Module</h2>";
    });
  
    transactionsLink.addEventListener("click", function (event) {
      event.preventDefault();
      content.innerHTML = "<h2>Transactions Module</h2>";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      var checkbox = document.getElementById("myCheckbox");
  
      if (checkbox.checked) {
        console.log("Checkbox is checked (Yes)");
      } else {
        console.log("Checkbox is unchecked (No)");
      }
      // Check if the browser supports password credentials (and the Credential Management API)
      if ("PasswordCredential" in window) {
        let credential = new PasswordCredential({
          id: "example-username",
          name: "Carina Anand", // In case of a login, the name comes from the server.
          password: "correct horse battery staple"
        });
  
        navigator.credentials.store(credential).then(
          () => {
            console.info(
              "Credential stored in the user agent's credential manager."
            );
          },
          (err) => {
            console.error("Error while storing the credential: ", err);
          }
        );
      }
  
      // Add authentication logic here
      if (username === "admin" && password === "password") {
        showElement(".maintenance-container");
        showElement(".maintenance-menu");
      }
    });
  
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        console.log("Checkbox is checked");
      } else {
        console.log("Checkbox is unchecked");
      }
    });
  
    function showElement(selector) {
      document.querySelector(selector).classList.remove("hidden");
    }
  });
  
   
  