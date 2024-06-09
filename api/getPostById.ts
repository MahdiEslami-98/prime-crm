const getPostById = async (id: string) => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/posts/records/${id}`,
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

export default getPostById;
