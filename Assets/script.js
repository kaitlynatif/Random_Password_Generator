  // The global constant of the display id is set
  const passwordOutput =  document.getElementById('password-output');
  // The lowercase characters used here are stored in ‘dataLowercase’
  const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
  // The uppercase characters used here are stored in ‘dataUppercase’
  const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
  // The numbers used here are stored in ‘dataNumbers’
  const dataNumbers = "0123456789".split('');
  // The symbols used here are stored in the ‘dataSymbols’
  const dataSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split('');

  function generatePassword() {
    // concat() is a string method that is used to concatenate strings together
    const data = [].concat(
      lowercase.checked ? dataLowercase : [],
      uppercase.checked ? dataUppercase : [],
      numbers.checked ? dataNumbers : [],
      symbols.checked ? dataSymbols : []
    );

    // The value obtained from the range slider is stored in ‘passwordLength’
    let passwordLength = parseInt(document.getElementById('display-password-length').value);
    let newPassword = '';

    // If you do not select a select box, you will see the following alert message
    if (data.length === 0) {
      passwordOutput.innerHTML = "Generate a password";
      alert('Please check at least one criteria');
      return;
    }

    // It has been decided in which format the generated password will be displayed
    // The Math.random() function returns a floating-point in the range 0 to less than 1
    for (let i = 0; i < passwordLength; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
    }
    // This is the code to display the value of the new password
    passwordOutput.value = newPassword;

    // The copy button has been activated.
    // Clicking the 'Generate' button will automatically copy the password
    passwordOutput.select();
    document.execCommand('copy');
    // After copying the password, the following text will appear in the button
    generateButton.innerHTML = "Copied !";
    // After 3.5 seconds, the button will return to its original state
    setTimeout(() => {generateButton.innerHTML = "Generate Again"}, 3500);
  }