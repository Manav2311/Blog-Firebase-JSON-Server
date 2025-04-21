
  <h1>📝 Blogs - A Simple Blog Platform</h1>
  <p><strong>Blogify</strong> is a React-based blog application that allows users to read, explore, and publish blogs in various categories. It uses React Router for navigation, Bootstrap for styling, and a mock REST API (<code>json-server</code>) as the backend.</p>

  <hr>

  <h2>📌 Features</h2>
  <ul>
    <li>🏠 <strong>Home Page</strong> with a clean hero section and feature highlights</li>
    <li>📚 <strong>Browse Blogs</strong> by category with filter buttons</li>
    <li>➕ <strong>Add Blog</strong> through a form with fields like category, title, blogger name, image, and description</li>
    <li>🔍 <strong>Blog Details</strong> view with full information</li>
    <li>📂 Uses categories like Entertainment, Technology, Sports, Business, Health, and Science</li>
    <li>🎨 Styled with Bootstrap and custom CSS</li>
  </ul>

  <hr>

  <h2>📁 Project Structure</h2>
  <pre><code>
src/
│
├── components/
│   ├── AddBlog.jsx         # Blog submission form
│   ├── Blog.jsx            # Blog list with category filtering
│   ├── BlogDetails.jsx     # Single blog view
│   ├── Header.jsx          # Navigation bar
│   └── Home.jsx            # Landing page
│
├── App.jsx                 # Main routing setup
├── main.jsx                # React DOM rendering
├── App.css                 # Global styles
└── database.json           # Mock blog data (used with json-server)
  </code></pre>

  <hr>

  <h2>🚀 Getting Started</h2>

  <h3>1️⃣ Prerequisites</h3>
  <ul>
    <li>Node.js and npm</li>
    <li><code>json-server</code> globally or locally installed</li>
  </ul>

  <h3>2️⃣ Installation</h3>
  <pre><code>git clone https://github.com/Manav2311/ReactExam.git
cd blogs
npm install</code></pre>

  <h3>3️⃣ Start Mock Backend</h3>
  <pre><code>npx json-server --watch database.json --port 3000</code></pre>
  <p>This serves the blog data at <code>http://localhost:3000/Blogs</code>.</p>

  <h3>4️⃣ Run React App</h3>
  <pre><code>npm run dev</code></pre>
  <p>Visit: <code>http://localhost:5173</code></p>

  <hr>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, React Router, React-Bootstrap</li>
    <li><strong>Backend:</strong> <code>json-server</code> (mock REST API)</li>
    <li><strong>Styling:</strong> Bootstrap + Custom CSS</li>
  </ul>

  <hr>

  <h2>📌 Sample Blog Object (<code>database.json</code>)</h2>
  <pre><code>{
  "id": "b3b1",
  "title": "How Using Opioids for Acute Pain is Like Burning Coal for Energy",
  "category": "Health",
  "blogger_name": "MATT McCORD",
  "description": "Using opioids to treat acute pain is a lot like burning coal...",
  "image": "https://example.com/image.jpg"
}</code></pre>

  <hr>

  <h2>📄 License</h2>
  <p>This project is open-source and free to use.</p>

  <hr>

  <h2>🙌 Author</h2>
  <p>Developed by <strong>[Manav B Prajapati]</strong>.</p>
