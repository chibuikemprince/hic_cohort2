const http = require("http");

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
  
  <!DOCTYPE html>
<html>
<head>
    <title>My Homepage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
        }
        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Homepage</h1>
    </header>
    <div class="container">
        <h2>About Me</h2>
        <p>This is a simple example of a homepage using HTML.</p>
        <h2>Contact Me</h2>
        <p>Email: example@example.com</p>

        <h2>Login</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <input type="submit" value="Login">
        </form>

        <h2>Register</h2>
        <form>
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" required>
            <input type="submit" value="Register">
        </form>
    </div>
</body>
</html>
  
  `);
});

server.listen(4000, function () {
  console.log("servr is running now");
});
