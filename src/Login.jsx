import React from "react";

import "./login.css";
const Login = () => {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="css/style.css"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        ></link>
        <title>Sign in</title>
      </head>

      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>
        <form class="form1" />
        <input class="un " type="text" align="center" placeholder="Username" />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="Password"
        />
        <a class="submit" align="center">
          Sign in
        </a>
        <p class="forgot" align="center">
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
