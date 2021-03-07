const apiURL = "https://navedex-api.herokuapp.com/v1";

class AuthenticationError extends Error {}

export async function login(email, password) {
  const response = await fetch(apiURL + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new AuthenticationError("failed to authenticate");
  }
}
