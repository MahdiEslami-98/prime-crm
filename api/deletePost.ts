const deletePost = async (id: string) => {
  try {
    await fetch(
      `https://primecrm-back.liara.run/api/collections/posts/records/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    throw error;
  }
};

export default deletePost;
