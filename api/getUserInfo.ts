import { userInfoRes } from "@/types/userInfoRes";

const getUserInfo = async (id: string): Promise<userInfoRes> => {
  try {
    const response = await fetch(
      `https://primecrm-back.liara.run/api/collections/users/records/${id}`,
      { cache: "no-store" },
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch user info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error as Error;
  }
};

export default getUserInfo;
