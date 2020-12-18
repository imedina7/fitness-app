import React from "react";

const initAppContext = () => ({
  isLoading: true,
  stopLoading() {
    this.isLoading = false;
  },
  startLoading() {
    this.isLoading = true;
  },
});
const AppContext = React.createContext(initAppContext());
export default AppContext;
