let commentButton = document.querySelector(".commentButton")

const addComment = async (req, res, next) => {
     let commentText = document.querySelector("#comment").value.trim()

    if (commentText) {
        const response = await fetch("/api/rating"
        ,{
            method: "POST", 
            body: JSON.stringify({comment: commentText}), 
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            document.location.reload()
        }
        else {
            alert("Failed to add comment")
        }
    }
    console.log("button clicked")
}
commentButton.addEventListener('click', addComment)

