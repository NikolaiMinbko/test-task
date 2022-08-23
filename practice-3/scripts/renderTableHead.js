import createElem from "./createElement.js";

const renderTableHead = (postsListItem) => {
  const tableHead = document.querySelector(".table__head");

  const tr = createElem("tr");

  Object.keys(postsListItem).forEach((item) => {
    tr.append(createElem("th", item));

    tableHead.append(tr);
  });
};

export default renderTableHead;
