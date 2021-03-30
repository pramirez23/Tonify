export const fetchSearchResults = query => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: {
      search: {
        query
      }
    }
  })
}