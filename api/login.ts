const loginRequest = async (data: { identity: string; password: string }) => {
  try {
    const response = await fetch(
      "https://primecrm-back.liara.run/api/collections/users/auth-with-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.status === 400) {
      throw new Error("Username or password is incorrect");
    }
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    const result = await response.json();
    document.cookie = `token=${result.token}; `;
    document.cookie = `isAdmin=${result.isAdmin}; `;

    return result;
  } catch (error) {
    throw error as Error;
  }
};

export default loginRequest;
