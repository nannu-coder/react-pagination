const Paginate = (followers) => {
  const itemPerPage = 10;
  const pages = Math.ceil(followers.length / itemPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });

  return newFollowers;
};

export default Paginate;
