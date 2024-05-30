const getPosts = async () => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/posts/records`,
      {
        cache: "no-store",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPosts;
