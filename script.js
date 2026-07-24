function submitBlog(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Blog submitted successfully!");
}