const BASE_URL = "http://localhost:3000";

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
