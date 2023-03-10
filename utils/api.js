var petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: process.env.API_KEY, secret: process.env.API_SECRET});
      
// informaiton we will use
// {
//   id: 60088546,
//   url: 'https://www.petfinder.com/dog/vance-60088546/nj/cherry-hill/saint-mutts-rescue-tx2601/?referrer_id=ce611338-360f-46e2-a983-0e09dfa6e523',
//   species: 'Dog',
//   age: 'Adult',
//   gender: 'Male',
//   size: 'Large',
//   name: 'Vance',
//   description: 'Vance is a smiley pit bull terrier who was rescued from a high-kill shelter in Texas moments before he was...',
//   status: 'adoptable',  
// }

let getKeys = (object) => {
  return {api_id: object.id,
	  url: object.url,
	  species:object.species,
	  age: object.age,
	  gender: object.gender,
	  size: object.size,
	  name: object.name,
	  description: object.description,
	  status: object.status,
	  picture: object.photos[0].medium };
}

// get the data for the api to present the user with
let populate = async (page = 1) => {
  let res = await client.animal.search({page});
  let animals = res["data"]["animals"].filter((entry) => entry["photos"].length > 0);
  animals = animals.map((animal) => getKeys(animal));
  return animals;
}


module.exports = {
  getKeys,
  populate
}
