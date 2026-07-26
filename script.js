let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function displayBlogs(blogList = blogs) {
    const container = document.getElementById("blogContainer");
    container.innerHTML = "";

    blogList.forEach((blog, index) => {
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

    blogs.push({
        title: title,
        content: content
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("Blog Added Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

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
    let newContent = prompt("Enter new content", blogs[index].content);

    if (newTitle && newContent) {
        blogs[index].title = newTitle;
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

displayBlogs();