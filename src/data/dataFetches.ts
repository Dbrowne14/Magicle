const BASE_URL = "https://staple-backend.onrender.com";

export const fetchWord = async () => {
  const response = await fetch(`${BASE_URL}/todays_word`);
  if (!response.ok) {
    console.log("Fetch Error");
  }
  return await response.json();
};

export const fetchAllcards = async () => {
  try {
    const response = await fetch(`${BASE_URL}/allCards`);
    if (!response.ok) {
      console.log("Error returning fetch");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
