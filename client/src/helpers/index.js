const comparator = (a, b) => {
  if (a.label.toLowerCase() < b.label.toLowerCase()) {
    return -1;
  }
  if (a.label.toLowerCase() > b.label.toLowerCase()) {
    return 1;
  }
  return 0;
};

export const genreToFilter = (genres) => {
  const genreFilters = [];
  for (let key in genres) {
    genreFilters.push({ value: key, label: genres[key] });
  }
  genreFilters.sort(comparator);

  return genreFilters;
};
