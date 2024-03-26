const LoginHtml = `<p class="welcome">Welcome to Zeeza</p>
        <form id="loginForm">
          <div id="emailLogin" class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              required
            />
            <label for="floatingInput">Username or Email</label>
          </div>

          <div id="passwordLogin" class="form-floating">
            <input
              type="password"
              class="form-control"
              id="Password"
              required
            />
            <label for="Password">Password</label>
          </div>
          <div class="forgetPassword" id="forgotPassword">
            <a>Forgot password?</a>
          </div>
          <button type="submit" id="button-in" class="btn btn-primary">
            Sign In
          </button>
        </form>
        <div class="hr">
          <hr />
          <span class="or">or</span>
          <hr />
        </div>

        <div class="googleText">
          <img src="../../public/google.png" class="google" />
          <div style="font-weight: 500">Sign in with Google</div>
        </div>
        <div>
          <span class="inline">New Account?</span>
          <button
            type="button"
            id="createAccount"
            class="btn btn-link inline create-account"
          >
            Create Account
          </button>
        </div>`;

const loginPage = document.getElementById("signIn-form");

//Set login html to the page
loginPage.innerHTML = LoginHtml;

//fetch login form
const signIn = document.getElementById("loginForm");
const forgotPassword = document.getElementById("forgotPassword");
const createAccount = document.getElementById("createAccount");
const containerRight = document.getElementById("containerRight");

//initialising variable to collect username and password
let userLogin = {};

console.log("hello world");

//adding username and password to userLogin
function addingData(e) {
  e.preventDefault();
  const username = document.getElementById("floatingInput").value;
  const password = document.getElementById("Password").value;
  userLogin.username = username;
  userLogin.password = password;
  console.log(userLogin);
}

//Onclick create account remove login html and add registration
function registerPage(e) {
  // Store the page in sessionStorage
  sessionStorage.setItem("currentPage", "signup");
  window.location.reload();
}

//After clicking forgotPassword
function afterForgotPassword() {
  sessionStorage.setItem("currentPage", "forgotPassword");
  const currentPage = sessionStorage.getItem("currentPage");
  console.log("currentpage after forgot password", currentPage);
  if (currentPage === "forgotPassword") {
    containerRight.innerHTML = `<p class="zeeza" id="zeeza">Zeeza</p>
      <div id="signIn-form">
        <div class="form-group">
          <label for="exampleInput" id="securityQuestionAsk"
            >What is your teacher's name?</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInput"
            placeholder="Enter text"
          />
          <button id="next-button" type="submit" class="btn btn-primary">
            Next
          </button>
        </div>
      </div>`;
  }
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", resetPassword);
}

function resetPassword() {
  sessionStorage.setItem("currentPage", "resetPassword");
  const currentPage = sessionStorage.getItem("currentPage");
  console.log("current page after reset new password", currentPage);
  if (currentPage === "resetPassword") {
    containerRight.innerHTML = `<p class="zeeza" id="zeeza">Zeeza</p>
      <div id="signIn-form">
        <div class="form-group">
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              minlength="8"
              required
            />
            <label for="password">Set New Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Password"
              required
            />
            <label for="confirmPassword">Confirm New Password</label>
          </div>
          <span id="password-match" style="color: red; font-size: 13px"></span>
          <div id="resetPasswordButton" ><button id="next-button" type="submit" class="btn btn-primary">
            Next
          </button></div>
        </div>
      </div>`;
  }
  const resetPasswordButton = document.getElementById(
    "resetPasswordButton"
  ).firstElementChild;
  resetPasswordButton.addEventListener("click", goToProfilePage);
}

function goToProfilePage() {
  sessionStorage.removeItem("currentPage");
  window.location.reload();
  window.location.href = "../profile/profile.html";
}

// Check for the "currentPage" value when the script loads
let currentPage = sessionStorage.getItem("currentPage");

// If the value is "forgotPassword," execute the function
if (currentPage === "forgotPassword") {
  afterForgotPassword();
}

currentPage = sessionStorage.getItem("currentPage");
if (currentPage === "resetPassword") {
  resetPassword();
}

signIn.addEventListener("submit", addingData);
createAccount.addEventListener("click", registerPage);
forgotPassword.childNodes[1].addEventListener("click", afterForgotPassword);

console.log(forgotPassword.childNodes[1]);
console.log(sessionStorage.getItem("currentPage"));
