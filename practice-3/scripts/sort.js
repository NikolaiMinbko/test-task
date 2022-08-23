let sortAsc = true;
let oldSortValue;

const sort = (data, sortValue) => {
  if (oldSortValue === sortValue) sortAsc = !sortAsc;
  oldSortValue = sortValue;

  data.sort((a, b) => {
    const first = a[sortValue];
    const seccond = b[sortValue];

    if (first > seccond) {
      return sortAsc ? -1 : 1;
    }
    if (first < seccond) {
      return sortAsc ? 1 : -1;
    }
    return 0;
  });
};

export default sort;
