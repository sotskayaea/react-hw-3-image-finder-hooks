const LoadMore = ({ onLoadMore, page }) => {
  const onAddPage = () => {
    onLoadMore(page + 1);
  };
  return (
    <button type="button" onClick={onAddPage}>
      Load More
    </button>
  );
};

export default LoadMore;
