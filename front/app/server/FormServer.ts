"use server";
export async function onSubmitSignIn(state: any, formData: FormData) {
  const res = await fetch(`http://localhost:8000/v1/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: formData.get("login"),
      password: formData.get("password"),
    }),
  });

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    return { msg: null };
  }
}

export async function onSubmitSignUp(state: any, formData: FormData) {
  const res = await fetch(`http://localhost:8000/v1/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    }),
  });

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    return { msg: null };
  }
}
