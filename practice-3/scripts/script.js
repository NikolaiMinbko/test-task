import fetchPosts from "./fetchPosts.js";
import renderTableData from "./renderTableData.js";
import sort from "./sort.js";
import search from "./search.js";
import renderTableHead from "./renderTableHead.js";

const initPostsList = await fetchPosts();
let postList = initPostsList;

const tableHead = document.querySelector(".table__head");
const searchInput = document.querySelector(".search__input");

renderTableHead(postList[0]);
renderTableData(postList);

tableHead.addEventListener("click", (e) => {
  const sortValue = e.target.innerText;

  sort(postList, sortValue);
  renderTableData(postList);
});

searchInput.addEventListener("input", (e) => {
  const q = e.target.value;

  if (q.length >= 3) {
    postList = search(initPostsList, q);

    renderTableData(postList);
  }

  if (q.length === 0) {
    postList = initPostsList;

    renderTableData(postList);
  }
});
