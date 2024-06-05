const cookieDate = () => {
  return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
};

export default cookieDate;
