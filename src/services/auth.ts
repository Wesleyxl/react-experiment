export const getToken = () => {
  const token = localStorage.getItem("token");

  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
};

export const validateToken = async (error: any) => {
  if (
    error.status === "Token is Invalid" ||
    error.status === "Token is Expired"
  ) {
    return logout();
  }
  return true;
};
