export const validateUserLoginForm = (values) => {
  const error = {};
  if (!values.username) {
    error.username = "Required";
  } else if (values.username.length < 6) {
    error.username = "Username must be at least 6 characters";
  } else if (values.username.length > 15) {
    error.username = "Username must be at most 15 characters";
  }
  if (!values.password) {
    error.password = "Required";
  } else if (values.password.length < 8) {
    error.password = "Password must be at least 8 characters";
  }
  return error;
};
