const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    console.log("Search clicked")
  const inputValue = searchInput.value;
  window.open("https://alltogethernow.findhelp.com/search_results/" + inputValue, '_blank');
});