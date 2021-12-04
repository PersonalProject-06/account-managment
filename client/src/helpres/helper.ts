export const checkEmail = (email: string): boolean => {
  if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
    typeof email === "string"
  ) {
    return true;
  }
  return false;
};

export const checkName = (name: string): boolean => {
  if (typeof name === "string" && name.includes("<script>") === false) {
    return true;
  }
  return false;
};

export const checkPassword = (password: string): boolean => {
  if (
    typeof password === "string" &&
    password.length > 8 &&
    /[^A-Za-z0-9]+/.test(password)
  ) {
    return true;
  }
  return false;
};

export const ifMatch = (password: string, password2: string): boolean => {
  if (password.length === password2.length) {
    return true;
  }
  return false;
};
