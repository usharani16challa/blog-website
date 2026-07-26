let blogs = [
    {
        title: "Importance of Reading",
        content: "Reading books improves knowledge, vocabulary, and creativity."
    },
    {
        title: "Morning Exercise",
        content: "Daily exercise keeps the body healthy and the mind fresh."
    }
];

function displayBlogs() {
    const container = document.getElementById("blogContainer");
    container.innerHTML = "";

    blogs.forEach((blog, index) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>

            <button onclick="editBlog(${index})">Edit</button>
            <button onclick="deleteBlog(${index})">Delete</button>
            <hr>
        `;

        container.appendChild(card);
    });
}

function submitBlog(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    blogs.push({ title, content });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Added Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayBlogs();
}

function deleteBlog(index) {
    blogs.splice(index, 1);
    alert("Blog deleted successfully!");
    displayBlogs();
}

function editBlog(index) {
    let newTitle = prompt("Enter new blog title:", blogs[index].title);
    let newContent = prompt("Enter new blog content:", blogs[index].content);

    if (newTitle && newContent) {
        blogs[index].title = newTitle;
        blogs[index].content = newContent;
        alert("Blog updated successfully!");
        displayBlogs();
    }
}

function searchBlogs() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(keyword)
    );

    displayBlogs(filteredBlogs);
}

displayBlogs();