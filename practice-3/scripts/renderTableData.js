import createElem from "./createElement.js";

const renderTableData = (postsList) => {
  const table = document.querySelector(".table");
  const tableBody = document.querySelector("tbody");
  const createdTableBody = document.createElement("tbody");

  if (tableBody) {
    tableBody.remove();
  }

  table.append(createdTableBody);

  postsList.forEach((post) => {
    const tr = createElem("tr");

    for (const key in post) {
      tr.append(createElem("td", post[key]));
    }

    createdTableBody.append(tr);
  });
};
export default renderTableData;
