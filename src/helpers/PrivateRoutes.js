const PrivateRoutes = ({ children }) => {
  const isAuthorized = localStorage.getItem("isAuthorized");
  if (isAuthorized === "true") {
    return children;
  }
  return null;
};

export default PrivateRoutes;
