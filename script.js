// script.js

const blogPostsContainer = document.getElementById('blogPosts');

// Sample blog post data (can be fetched from a backend or API)
const blogPosts = [
   {
      title: 'Blog Post Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   },
   {
      title: 'Blog Post Title 2',
      content: 'Sed feugiat neque et risus aliquam, in aliquet tellus tristique.',
   }
];

// Generate HTML for blog posts
function generateBlogPostHTML(blogPost) {
   return `
      <article>
         <h2>${blogPost.title}</h2>
         <p>${blogPost.content}</p>
      </article>`;
}

// Render blog posts on the page
function renderBlogPosts() {
   let blogPostsHTML = '';
   blogPosts.forEach((post) => {
      blogPostsHTML += generateBlogPostHTML(post);
   });
   blogPostsContainer.innerHTML = blogPostsHTML;
}

// Call the renderBlogPosts function to display the blog posts
renderBlogPosts();