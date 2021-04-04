export const fetchLibraryItem = (itemId, itemType, itemLocation) => {
  return $.ajax({
    method: "GET",
    url: "/api/playbar",
    data: {
      playbar: {
        itemId,
        itemType,
        itemLocation
      }
    }
  })
};