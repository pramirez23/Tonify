export const fetchHipHop = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/genres/-1',
    data: {
      genre: "Hip hop"
    }
  })
};

export const fetchPop = () => {
  return $.ajax({
    method: "GET",
    url: 'api/genres/-1',
    data: {
      genre: "Pop"
    }
  })
};

export const fetchRock = () => {
  return $.ajax({
    method: "GET",
    url: 'api/genres/-1',
    data: {
      genre: "Rock"
    }
  })
};

export const fetchRnb = () => {
  return $.ajax({
    method: "GET",
    url: 'api/genres/-1',
    data: {
      genre: "R&B"
    }
  })
};