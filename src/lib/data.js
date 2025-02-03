export const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong while fetching users");
  }
};

export const getUser = async (_id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${_id}`);
    if (!res.ok) {
      throw new Error("Something went wrong while fetching a single user");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null; // Graceful error handling
  }
};

export const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog");
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getBlog = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null; // Graceful error handling
  }
};

export async function getUserByEmailAndPassword(email, password) {
  try {
    const user = await fetch(`http://localhost:3000/api/users/${email}`);
    if (!user.ok) {
      throw new Error("Something went wrong during authentication");
    }

    return user.email === email && user.password === password;
  } catch (error) {
    console.error(error);
    return null; // Graceful error handling
  }
}
