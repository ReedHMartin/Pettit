let commentButton = document.querySelector(".commentButton")
let userInfo = document.querySelector("#comment");
let user_id = userInfo.getAttribute("data-id");
let URL = (window.location.href).split("/");
let animal_id = URL[URL.length-1];

let forwardBtn = document.querySelector("#forward");
let backBtn = document.querySelector("#back");


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


const backAnimal = (event) => {
  event.preventDefault();

  URL.pop();
  URL.push(--animal_id);

  document.location.replace(URL.join("/"));
}

const forwardAnimal = (event) => {
  event.preventDefault();

  URL.pop();
  URL.push(++animal_id);

  document.location.replace(URL.join("/"));

  
}


commentButton.addEventListener('click', addComment)

forwardBtn.addEventListener("click",forwardAnimal);
backBtn.addEventListener("click",backAnimal);
