const blogs = [
    {
        title: "Importance of Reading",
        content: "Reading books improves knowledge, vocabulary, and creativity."
    },
    {
        title: "Morning Exercise",
        content: "Daily exercise keeps the body healthy and the mind fresh."
    }
];

const container = document.getElementById("blogContainer");

blogs.forEach(blog => {
    const card = document.createElement("div");
    card.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
        <hr>
    `;
    container.appendChild(card);
});

function submitBlog(event){
    event.preventDefault();
    
alert("Blog Added Successfully");
}