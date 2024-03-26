const registerHtml = `<form id="register-form">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="nameInput"
              placeholder="Full Name"
            />
            <label for="nameInput">Full Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="name@example.com"
              required
            />
            <label for="emailInput">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              minlength="8"
              required
            />
            <label for="password">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Password"
              required
            />
            <label for="confirmPassword">Confirm Password</label>
          </div>
          <span id="password-match" style="color:red; font-size:13px"></span>
          <div class="space">
            <div class="form-check mb-3" id="terms">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to All the Statement in
                <a>Terms of Service</a>
              </label>
            </div>
          </div>

          <button type="submit" id="button-in" class="btn btn-primary">
            Sign Up
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
          <span>Already have an account?</span>
          <button type="button" class="btn btn-link" id="already-signIn">
            Sign In
          </button>
        </div>
      </div>`;

console.log("hello world");
let userDetail = {};

//adding and removing menu class
function menu() {
  const menuOne = document.getElementById("menuOne");
  menuOne.classList.remove("menu1");
  menuOne.classList.add("menu2");
  const menuTwo = document.getElementById("menuTwo");
  menuTwo.classList.remove("menu2");
  menuTwo.classList.add("menu1");
}

function backToLogin() {
  sessionStorage.removeItem("currentPage");
  window.location.reload();
}

//Storing data from registration page
function storeDataFromUser(e) {
  e.preventDefault();
  //check if password equals confirmPassword
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordMatch = document.getElementById("password-match");
  if (password !== confirmPassword) {
    passwordMatch.innerHTML = `Password does not match`;
    return;
  }
  passwordMatch.innerHTML = "";
  const name = document.getElementById("nameInput").value;
  userDetail.name = name;
  const email = document.getElementById("emailInput").value;
  userDetail.email = email;
  userDetail.password = password;
  console.log(userDetail);

  sessionStorage.setItem("currentPage", "birthDate");
  window.location.reload();
}

function askBirthDate() {
  const currentPage = sessionStorage.getItem("currentPage");
  console.log("currentpage after birth date", currentPage);
  if (currentPage === "birthDate") {
    containerRight.innerHTML = `<p class="zeeza" id="zeeza">Zeeza</p>
      <div id="signIn-form">
        <div class="form-group">
          <div class="datePickerText">Enter your birth date:</div>
          <input type="date" id="datepicker" />
         <div><span id="nullDatepicker" style="color: red; font-size: 13px"></span></div>
          <div id="birthdate-button">
            <button id="next-button" type="submit" class="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>`;
  }
  const nextButtonBirthdate =
    document.getElementById("birthdate-button").firstElementChild;
  nextButtonBirthdate.addEventListener("click", setUsername);
}

function setUsername() {
  let dateInput = document.getElementById("datepicker");
  const nullDatepicker = document.getElementById("nullDatepicker");
  let dateValue = dateInput.value;
  console.log(dateValue);

  if (dateValue) {
    let selectedDate = new Date(dateValue);

    // Extract day, month, and year
    let day = selectedDate.getDate();
    let month = selectedDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    let year = selectedDate.getFullYear();

    let today = new Date();
    currentYear = today.getFullYear();

    if (year > currentYear) {
      nullDatepicker.innerText = "Please enter correct year";
      return;
    }
    userDetail.day = day;
    userDetail.month = month;
    userDetail.year = year;
    console.log(userDetail);
  } else {
    nullDatepicker.innerText = "Please select a date.";
    return;
  }

  sessionStorage.setItem("currentPage", "username");
  currentPage = sessionStorage.getItem("currentPage");
  if (currentPage === "username") {
    containerRight.innerHTML = `<p class="zeeza" id="zeeza">Zeeza</p>
      <div id="signIn-form">
        <div class="form-group">
          <label for="set-username" style="margin-bottom: 4%"
            >Enter a Username:
          </label>
          <input
            type="text"
            class="form-control"
            id="set-username"
            placeholder="Enter text"
          />
          <span
            id="usernameEmpty"
            style="color: red; font-size: 13px"
          ></span>
          <div id="username-button">
            <button id="next-button" type="submit" class="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>`;
  }
  const usernameButton =
    document.getElementById("username-button").firstElementChild;
  usernameButton.addEventListener("click", askSecurityQuestion);
}

function askSecurityQuestion() {
  const usernameInput = document.getElementById("set-username");
  const usernameError = document.getElementById("usernameEmpty");

  if (!usernameInput.value) {
    usernameError.innerText = "Set username";
    return;
  }
  userDetail.username = usernameInput.value;
  console.log(userDetail);

  sessionStorage.setItem("currentPage", "securityQuestion");
  currentPage = sessionStorage.getItem("currentPage");

  if (currentPage === "securityQuestion") {
    containerRight.innerHTML = `<p class="zeeza" id="zeeza">Zeeza</p>
      <div id="signIn-form">
        <div class="form-group">
          <div class="form-group col-md-15">
            <label for="inputState">Choose Security Question</label>
            <select name="securityQuestions" id="securityQuestions">
              <option value="question1" selected>
                What is your mother's maiden name?
              </option>
              <option value="question2">In what city were you born?</option>
              <option value="question3">
                What is the name of your favorite teacher?
              </option>
              <option value="question4">What is your favorite food?</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter answer"
              style="margin-bottom: 5%"
            />
          </div>
          <div>
            <span id="wrong-security" style="color: grey; font-size: 13px"
              >Please remember this for future reference</span
            >
          </div>
          <div id="security-button">
            <button id="next-button" type="submit" class="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>`;
  }
  console.log("currentpage at security questions", currentPage);
  const securityButton =
    document.getElementById("security-button").firstElementChild;
  securityButton.addEventListener("click", goToProfilePage2);
}

function goToProfilePage2() {
  const securityQuestions = document.getElementById("securityQuestions");
  const securityError = document.getElementById("wrong-security");
  const securityAnswer = document.getElementById("exampleInputPassword1");

  if (securityAnswer.value === "") {
    securityError.style.color = "red";
    securityError.innerText = "Please enter an answer";
    return;
  }

  userDetail.securityQuestions = securityQuestions.value;
  userDetail.securityAnswer = securityAnswer.value;
  console.log(userDetail);

  sessionStorage.removeItem("currentPage");
  window.location.reload();
  window.location.href = "../profile/profile.html";
}

// Check for the "currentPage" value when the script loads
currentPage = sessionStorage.getItem("currentPage");
console.log("current page after birthDate", currentPage);
if (currentPage === "birthDate") {
  askBirthDate();
}

currentPage = sessionStorage.getItem("currentPage");
console.log("current page after username", currentPage);
if (currentPage === "username") {
  setUsername();
}

currentPage = sessionStorage.getItem("currentPage");
console.log("current page after security q", currentPage);
if (currentPage === "securityQuestion") {
  askSecurityQuestion();
}

console.log("current page after nothing", currentPage);

//Stay at registration page even after refreshing page
currentPage = sessionStorage.getItem("currentPage");
if (currentPage === "signup") {
  loginPage.innerHTML = registerHtml;
  menu();

  const alreadySignIn = document.getElementById("already-signIn");
  const registerForm = document.getElementById("register-form");

  alreadySignIn.addEventListener("click", backToLogin);
  registerForm.addEventListener("submit", storeDataFromUser);
}
