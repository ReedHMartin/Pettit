let commentButton = document.querySelector(".commentButton")
let userInfo = document.querySelector("#comment");
let user_id = userInfo.getAttribute("data-id");
let URL = (window.location.href).split("/");
let animal_id = URL[URL.length-1];


const addComment = async () => {
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
	console.log("RES is ok");
	document.location.reload()
      }
      else {
	alert("Failed to add comment")
      }
    }
  } catch (err) {
    console.log(err);
  }
  console.log("button clicked")

}


commentButton.addEventListener('click', addComment)

