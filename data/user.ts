import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    return user;
  } catch (error) {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    return user;
  } catch (error) {
    return null;
  }
};
