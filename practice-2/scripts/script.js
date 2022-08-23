import fetchPosts from "./fetchPosts.js";
import renderTableHead from "./renderTableHead.js";
import renderTableData from "./renderTableData.js";

const postsList = await fetchPosts();

renderTableHead(postsList[0]);
renderTableData(postsList);
