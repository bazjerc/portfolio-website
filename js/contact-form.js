// Page elements

const contactForm = document.forms.contactForm;
const inputName = contactForm.elements.name;
const inputEmail = contactForm.elements.email;
const inputMessage = contactForm.elements.message;
const formSubmitBtn = contactForm.querySelector(".contact-form__submit-btn");
const submitText = contactForm.querySelector(".contact-form__submit-text");

// Validation message control

const setValidationText = function (input, message) {
  const validationText = contactForm.querySelector(
    `#${input} + .contact-form__validation-text`
  );
  validationText.textContent = message;
};

const showValidationText = function (input) {
  const validationText = contactForm.querySelector(
    `#${input} + .contact-form__validation-text`
  );
  validationText.style.display = "block";
};

const hideValidationText = function (input) {
  const validationText = contactForm.querySelector(
    `#${input} + .contact-form__validation-text`
  );
  validationText.style.display = "none";
};

const showSubmitText = function (type = "valid") {
  console.log("show");
  if (type === "valid") {
    submitText.textContent = "Thank you for your message!";
    submitText.style.visibility = "visible";
    submitText.style.opacity = "1";
  } else {
    submitText.innerHTML = "Something went wrong.<br>Please try again.";
    submitText.classList.add("invalid");
    submitText.style.visibility = "visible";
    submitText.style.opacity = "1";
  }
};

const hideSubmitText = function (behaviour) {
  console.log("hide");
  if (behaviour === "instant") {
    submitText.style.opacity = "0";
    submitText.style.visibility = "hidden";
  } else {
    submitText.style.opacity = "0";
    submitText.addEventListener(
      "transitionend",
      () => {
        submitText.style.visibility = "hidden";
        submitText.classList.remove("invalid");
        submitText.textContent = "";
      },
      { once: true }
    );
  }
};

// Field validation logic

const validateName = function (name) {
  if (name.length === 0) {
    inputName.classList.add("invalid");
    setValidationText("name", "This field is required");
    showValidationText("name");
    return false;
  }

  const minLength = 3;

  if (name.length < minLength) {
    inputName.classList.add("invalid");
    setValidationText(
      "name",
      `Entered name must be at least ${minLength} characters long`
    );
    showValidationText("name");
    return false;
  }

  inputName.classList.remove("invalid");
  setValidationText("name", "");
  hideValidationText("name");
  return true;
};

const validateEmail = function (email) {
  if (email.length === 0) {
    inputEmail.classList.add("invalid");
    setValidationText("email", "This field is required");
    showValidationText("email");
    return false;
  }

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!emailRegex.test(email)) {
    inputEmail.classList.add("invalid");
    setValidationText("email", "Entered email is invalid");
    showValidationText("email");
    return false;
  }

  inputEmail.classList.remove("invalid");
  setValidationText("email", "");
  hideValidationText("email");
  return true;
};

const validateMessage = function (message) {
  if (message.length === 0) {
    inputMessage.classList.add("invalid");
    setValidationText("message", "This field is required");
    showValidationText("message");
    return false;
  }

  const minLength = 10;

  if (message.length < minLength) {
    inputMessage.classList.add("invalid");
    setValidationText(
      "message",
      `Entered message must be at least ${minLength} characters long`
    );
    showValidationText("message");
    return false;
  }

  inputMessage.classList.remove("invalid");
  setValidationText("message", "");
  hideValidationText("message");
  return true;
};

// Form control

const sendFormData = function (formData) {
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const res = fetch("https://formbold.com/s/60vM3", reqOptions);

  return res.then((res) => res.status);
};

const resetForm = function () {
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
};

let hideSubmitTextTimer;

const submitForm = async function (e) {
  e.preventDefault();

  hideSubmitText("instant");
  clearTimeout(hideSubmitTextTimer);
  formSubmitBtn.blur();

  const name = inputName.value;
  const email = inputEmail.value;
  const message = inputMessage.value;

  const isNameValid = validateName(name);
  const isEmailValid = validateEmail(email);
  const isMessageValid = validateMessage(message);

  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  if (!isFormValid) return;

  const formData = new FormData(contactForm);

  formSubmitBtn.setAttribute("disabled", true);

  const resStatus = await sendFormData(formData);

  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  if (resStatus === 200) {
    resetForm();
    showSubmitText();
    hideSubmitTextTimer = setTimeout(() => hideSubmitText(), 5000);
  } else {
    showSubmitText("invalid");
  }

  formSubmitBtn.removeAttribute("disabled");
};

contactForm.addEventListener("submit", submitForm);
