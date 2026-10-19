// Initial data
let posts = [
  { id: 1, title: "Welcome to My Blog", content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!" },
  { id: 2, title: "Learning JavaScript", content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation." },
  { id: 3, title: "Web Development Tips", content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary." }
];
let nextId = 4;

const postList = document.getElementById("postList");
const addBtn = document.getElementById("addBtn");

// Render all posts to the page
function render() {
  postList.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "post";

    const header = document.createElement("div");
    header.className = "post-header";
    const title = document.createElement("h2");
    title.textContent = post.title;
    const editTitleBtn = document.createElement("button");
    editTitleBtn.textContent = "Edit Title";
    editTitleBtn.addEventListener("click", () => editTitle(post.id));
    header.append(title, editTitleBtn);

    const content = document.createElement("p");
    content.textContent = post.content;

    const actions = document.createElement("div");
    actions.className = "post-actions";
    const editContentBtn = document.createElement("button");
    editContentBtn.textContent = "Edit Content";
    editContentBtn.addEventListener("click", () => editContent(post.id));
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Post";
    deleteBtn.addEventListener("click", () => deletePost(post.id));
    actions.append(editContentBtn, deleteBtn);

    card.append(header, content, actions);
    postList.appendChild(card);
  });
}

function addPost() {
  const title = prompt("Enter post title:");
  if (!title || !title.trim()) return;
  const content = prompt("Enter post content:");
  if (!content || !content.trim()) return;
  posts.push({ id: nextId++, title: title.trim(), content: content.trim() });
  render();
}

function editTitle(id) {
  const post = posts.find(p => p.id === id);
  const newTitle = prompt("Edit title:", post.title);
  if (newTitle && newTitle.trim()) {
    post.title = newTitle.trim();
    render();
  }
}

function editContent(id) {
  const post = posts.find(p => p.id === id);
  const newContent = prompt("Edit content:", post.content);
  if (newContent && newContent.trim()) {
    post.content = newContent.trim();
    render();
  }
}

function deletePost(id) {
  if (confirm("Delete this post?")) {
    posts = posts.filter(p => p.id !== id);
    render();
  }
}

addBtn.addEventListener("click", addPost);
render();