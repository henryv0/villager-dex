const getUrl = (name) => {
  let URL = `http://localhost:8080/api/villagers/${name}`;

  return URL;
};

const Villager = (name) => {  
  fetch(getUrl(name), {
    method: "GET",
    headers: {
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}

export default Villager;