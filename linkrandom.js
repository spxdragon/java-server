 function validateLogin() {
      var credentials = [
        { username: "Adminxowner", password: "aaa3443", url: "download.html" },
        { username: "user1", password: "21930147euidiwerw", url: "download.html" },
        { username: "user2", password: "sdfsadfasdr323467fsadfasd", url: "download.html" },
        { username: "user3", password: "4739wfdry6532g65r7t5678", url: "download.html" },
        { username: "user4", password: " ghc6e4r65r7tc66783c76r53", url: "download.html" },
        { username: "user5", password: "rewrq4223fdfa356", url: "download.html"},
        { username: "user6", password: "34234218hfgwewk323", url: "download.html"},
        { username: "user7", password:"34234hfhu3348far352", url: "download.html"},
        { username: "Whacka", password: "Whacka07", url: "download.html"},
        { username: "dom", password: "3567", url: "download.html"}
      ];

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      for (var i = 0; i < credentials.length; i++) {
        if (username === credentials[i].username && password === credentials[i].password) {
          window.location.href = credentials[i].url;
          return false; // Prevent the form submission
        }
      }

      alert("Invalid username or password!");
      return false;
    }
