export default {
    generic: {
      missing: 'Please provide the required field',
      invalid: 'The value you have provided is invalid',
    },
  
    type: {
      text: {
        missing: 'Please provide the required Field',
      },
      email: {
        invalid: () => 'The e-mail  has invalid format',
        missing: 'Please provide the required Field',
      },
      password: {
        invalid: 'The password you entered is invalid',
        missing: 'Please provide the required Field',
        rule: {
          capitalLetter: 'Include at least one capital letter',
          minLength: 'Password must be at least 6 characters long',
        },
      },
    },
  
    name: {
      confirmPassword: {
        rule: {
          matches: 'The passwords do not match',
        },
      },
    },
  }