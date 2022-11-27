function passwordValidator(password) {
  let isLongEnough = false;
  let hasOnlyLettersAndDigits = false;
  let hasTwoDigits = false;
  let arrPassword = password.split('');
  let passLength = arrPassword.length;
  let numberCounter = 0;

  if (passLength >= 6 && passLength <= 10) {
    isLongEnough = true;
  }

  for (let i = 0; i < passLength; i++) {
    let currentChar = arrPassword[i];
    let currentCharAscii = currentChar.charCodeAt();

    if (currentCharAscii >= 48 && currentCharAscii <= 57) {
      numberCounter++;
      if (numberCounter >= 2) {
        hasTwoDigits = true;
      }
    }

    if (
      (currentCharAscii >= 48 && currentCharAscii <= 57) ||
      (currentCharAscii >= 65 && currentCharAscii <= 90) ||
      (currentCharAscii >= 97 && currentCharAscii <= 122)
    ) {
      hasOnlyLettersAndDigits = true;
    } else {
      hasOnlyLettersAndDigits = false;
      break;
    }
  }
  if (isLongEnough && hasTwoDigits && hasOnlyLettersAndDigits) {
    console.log(`Password is valid`);
  }
  if (!isLongEnough) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!hasOnlyLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!hasTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("MyPass123");
