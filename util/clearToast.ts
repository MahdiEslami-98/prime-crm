const clearToast = (set: Function) => {
  setTimeout(() => {
    set({
      show: false,
      message: "",
      status: "",
    });
  }, 3000);
};

export default clearToast;
