const AuthTokenHandler = (accessToken, refreshToken, isAuth) => {

  localStorage.setItem("kw-poc-accessToken", accessToken);
  localStorage.setItem("kw-poc-refreshToken", refreshToken);
  localStorage.setItem("isAuthorized", isAuth);
  
};

export default AuthTokenHandler;
