export const fetchHome = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/home',
  })
};