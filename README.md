# BlogForge 📝

**Craft, Manage, and Publish Blogs with Ease**  
*A full-stack blog management system built with the MERN stack (MongoDB, Express.js, React, Node.js).*

![BlogForge Demo] 


---

## Features ✨

### Core Features
- **User Roles**: Admin, Author, and Reader roles with granular permissions.
- **Blog Management**: Create, edit, schedule, and delete posts with a rich text editor.
- **Categories & Tags**: Organize posts using customizable categories and tags.
- **Comments & Interactions**: Readers can comment, like, and bookmark posts.
- **Search & Filters**: Search posts by keywords, filter by categories, or sort by date/popularity.
- **Dashboard Analytics**: Track post performance (views, likes) for authors and admins.

### Advanced Features
- **Social Login**: Sign in with Google/GitHub (optional).
- **SEO Optimization**: Custom slugs, meta descriptions, and SEO-friendly URLs.
- **Password Reset**: Secure email-based password reset flow.
- **Image Upload**: Optimized image hosting via Cloudinary.

---

## Tech Stack 🛠️

| **Frontend**        | **Backend**         | **Database** | **Services**        |
|---------------------|---------------------|--------------|---------------------|
| React               | Node.js & Express.js| MongoDB      | Cloudinary (Images) |
| React Router        | JWT Authentication  | Mongoose     | SendGrid (Emails)   |
| Redux Toolkit       | RESTful APIs        |              |                     |
| Tailwind CSS        | Axios               |              |                     |
| Quill Rich Text Edi | Bcrypt.js           |              |                     |

---

## Installation 🚀

### Prerequisites
- Node.js (v22+)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary & SendGrid API keys (for images/emails)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Iknowimhere/blogForge.git
   cd blogforge

   to start backend server
   cd backend
   ```dev
   npm run dev
  ```prod
   npm start
   