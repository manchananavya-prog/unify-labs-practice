 const form = document.getElementById("postForm");
const container = document.getElementById("blog-container");

// Load posts
async function loadPosts() {
    try {
        const res = await fetch('/api/posts');
        const posts = await res.json();

        container.innerHTML = posts.map(post => `
            <div class="post-card">
                <h2>${post.title}</h2>
                <small>By ${post.author}</small>
                <p>${post.content}</p>
                <button onclick="deletePost('${post._id}')">Delete</button>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = "<p>⚠ Backend not connected.</p>";
    }
}

// Create post
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newPost = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        content: document.getElementById("content").value
    };

    await fetch('/api/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
    });

    form.reset();
    loadPosts();
});

// Delete post
async function deletePost(id) {
    await fetch(`/api/posts/${id}`, {
        method: "DELETE"
    });

    loadPosts();
}

window.onload = loadPosts;