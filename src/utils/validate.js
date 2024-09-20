const PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validateEmail = (email) => {
  return EMAIL.test(email);
};

export const validatePassword = (password) => {
  return PASSWORD.test(password);
};
