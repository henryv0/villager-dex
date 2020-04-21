const getUrl = (name) => {
  let URL = `http://localhost:8080/api/villagers/${name}`;

  return URL;
};

const Villager = (name) => {  
  return fetch(getUrl(name))
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.error(err);
    });
}

export default Villager;