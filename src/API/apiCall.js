async function fetchAllPlayers() {
  try {
    const response = await fetch(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/"
    );
    const result = await response.json();
    return result.books; // Return the player data
  } catch (error) {
    throw new Error(error.message); // Throw error for caller to handle
  }
}
export default fetchAllPlayers;

fetchAllPlayers();
