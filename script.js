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
function submitBlog(event){
    event.preventDefault();
    
    alert("Blog Added Successfully");
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

displayBlogs();