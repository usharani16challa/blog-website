let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function displayBlogs(blogList = blogs) {
    const container = document.getElementById("blogContainer");
    container.innerHTML = "";

    blogList.forEach((blog, index) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h2>${blog.title}</h2>
            <h4>Category:${blog.category}</h4>
            <p>${blog.content}</p>

            <button onclick="editBlog(${index})">Edit</button>
            <button onclick="deleteBlog(${index})">Delete</button>

            <hr>
        `;
        container.appendChild(card);
    });
}

function filterBlogs() {
    const selectedCategory = document.getElementById("filterCategory").value;

    if (selectedCategory === "All") {
        displayBlogs();
        return;
    }

    const filteredBlogs = blogs.filter(blog =>
        blog.category === selectedCategory
    );

    displayBlogs(filteredBlogs);
}


function sortBlogs() {
    blogs.sort((a, b) => a.title.localeCompare(b.title));

    localStorage.setItem("blogs", JSON.stringify(blogs));

    displayBlogs();

    alert("Blogs sorted successfully!");
}

function submitBlog(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const category=document.getElementById("category").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    blogs.push({
        title: title,
        category:category,
        content: content
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Added Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    window.location.href="index.html";

    displayBlogs();
}

function deleteBlog(index) {
    blogs.splice(index, 1);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Deleted Successfully!");

    displayBlogs();
}

function editBlog(index) {
    let newTitle = prompt("Enter new title", blogs[index].title);
    let newCategory = prompt("Enter new title", blogs[index].category);
    let newContent = prompt("Enter new content", blogs[index].content);

    if (newTitle && newContent) {
        blogs[index].title = newTitle;
        blogs[index].category=newCategory;
        blogs[index].content = newContent;

        localStorage.setItem("blogs", JSON.stringify(blogs));

        alert("Blog Updated Successfully!");

        displayBlogs();
    }
}

function searchBlogs() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();

    let filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(keyword)
    );

    displayBlogs(filteredBlogs);
}

function clearBlogs() {
    if (confirm("Are you sure you want to delete all blogs?")) {
        blogs = [];
        localStorage.removeItem("blogs");
        displayBlogs();
        alert("All blogs deleted successfully!");
    }
}

displayBlogs();