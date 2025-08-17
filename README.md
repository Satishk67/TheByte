# The Byte - Blog App

The Byte is a modern React-based blog application that allows users to browse, filter, and paginate blog posts by tags and categories. It demonstrates best practices in React context management, API integration, and component-based architecture.

## Features

- **Browse Blogs:** View a list of blog posts with titles, summaries, and images.
- **Filter by Tag/Category:** Easily filter posts by selecting tags or categories.
- **Pagination:** Navigate through multiple pages of posts, with context-aware pagination for tags and categories.
- **Loading Spinner:** Displays a loader while fetching data from the API.
- **Responsive Design:** Optimized for desktop and mobile devices.

## Technologies Used

- **React** (with hooks, routers and context API)
- **Vite** (for fast development and build)
- **CSS** (custom styling)
- **Fetch API** (for backend communication)

## Folder Structure

```
blogapp/
├── public/
├── src/
│   ├── components/
│   │   ├── Blogs.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── Post.jsx
│   │   └── Spinner.jsx
│   ├── context/
│   │   └── BlogContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/the-byte-blogapp.git
   cd blogapp
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your backend API base URL:
     ```
     VITE_BASE_URL=https://your-api-url.com/api/blogs
     ```

4. **Start the development server:**
   ```
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

## Usage

- **Home Page:** Displays all blog posts with pagination.
- **Tag/Category Pages:** Click on a tag or category to filter posts. Pagination remains within the selected filter.
- **Post Details:** Click on a post to view more details (if implemented).

## Code Highlights

- **Context Management:** All blog data and actions are managed via `BlogContext` for easy access across components.
- **Dynamic Fetching:** The app fetches posts based on page, tag, and category, ensuring correct data is shown on navigation.
- **Component Structure:** Each UI part (header, post, loader, pagination) is a separate, reusable component.
