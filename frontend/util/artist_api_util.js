export const fetchArtist = id => {
  return $.ajax({
    method: "GET",
    url: `api/artists/${id}`,
  })
};