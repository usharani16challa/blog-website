const blogs = [];

function submitBlog(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    blogs.push({ title, content });

    alert("Blog Added Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}