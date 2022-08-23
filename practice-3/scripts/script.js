import fetchPosts from "./fetchPosts.js";
import renderTableData from "./renderTableData.js";
import sort from "./sort.js";
import search from "./search.js";
import renderTableHead from "./renderTableHead.js";

const postsList = await fetchPosts();

const tableHead = document.querySelector(".table__head");
const searchInput = document.querySelector(".search__input");

renderTableHead(postsList[0]);
renderTableData(postsList);

tableHead.addEventListener("click", (e) => {
  const sortValue = e.target.innerText;

  sort(postsList, sortValue);
  renderTableData(postsList);
});

searchInput.addEventListener("input", (e) => {
  const q = e.target.value;
  if (q.length >= 3 || q.length === 0) {
    const searchedItems = search(postsList, q);

    renderTableData(searchedItems);
  }
});
