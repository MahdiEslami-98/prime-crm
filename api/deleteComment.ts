const deleteComment = async (id: string) => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/comments/records/${id}`,
      {
        method: "DELETE",
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default deleteComment;
