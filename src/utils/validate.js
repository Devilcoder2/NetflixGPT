export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,10}$".test(
      password
    );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
