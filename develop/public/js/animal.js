let commentButton = document.querySelector(".commentButton")
let userInfo = document.querySelector("#comment");
let user_id = userInfo.getAttribute("data-id");
let URL = (window.location.href).split("/");
let animal_id = URL.pop();

let forwardBtn = document.querySelector("#forward");
let backwardBtn = document.querySelector("#backward");


const getCount = async () => {
  try {
    const count = await fetch("/count",
			      {
				method: "GET", 
				headers: {
				  "Content-Type": "application/json"
				}	
			      })
    console.log("count:",count);
    return count;
    
  } catch (err) {
    console.log(err);
  }
  
}

const addComment = async (event) => {
  let comment = document.querySelector("#comment").value.trim()

  try {
    if (comment) {
      const response = await fetch("/api/rating",
				   {
				     method: "POST", 
				     body: JSON.stringify({ comment, animal_id}),
				     headers: {
				       "Content-Type": "application/json"
				     }
				   });
      if (response.ok) {
	document.location.reload()
      }
      else {
	alert("Failed to add comment")
      }
    }
  } catch (err) {
    console.log(err);
  }

}


const backwardAnimal = async (event) => {
  event.preventDefault();
  if (animal_id > 1) {
    animal_id -= 1;
  } else if (animal_id == 1) {
    animal_id = 1;
    let max = getCount();
    console.log(max);
  }
  console.log(animal_id);
  
  URL.push(animal_id);
  document.location.replace(URL.join("/"));
  
}

const forwardAnimal = (event) => {
  event.preventDefault();

  URL.push(++animal_id);
  
  document.location.replace(URL.join("/"));

  
}


commentButton.addEventListener('click', addComment)

forwardBtn.addEventListener("click",forwardAnimal);
backwardBtn.addEventListener("click",backwardAnimal);
