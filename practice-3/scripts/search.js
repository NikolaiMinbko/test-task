const search = (data, q) =>
  data.filter((item) => {
    for (const key in item) {
      if (item[key].toString().includes(q)) {
        return item;
      }
    }
  });

export default search;
