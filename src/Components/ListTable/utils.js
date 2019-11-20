export const getCurrentPageList = (currentPage, itemsPerPage, contentList) => {
  if ((!currentPage || !itemsPerPage || !contentList)) return [];

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  return contentList.slice(firstItemIndex, lastItemIndex);
};
