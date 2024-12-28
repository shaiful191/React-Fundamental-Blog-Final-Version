import React from 'react'

const BlogLIst = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  )
}

export default BlogLIst


//Props are read-only and cannot be modified by the child component.
//Callback functions(handleDelete) are used to send data up from child to parent component.
//Always keep the data flow unidirectional in React: The concept of unidirectional data flow in React means that data flows in a single direction: from the parent component to child components.

/*
1. What Is Unidirectional Data Flow?
* Parent components manage and own the data (state).
* Child components receive this data as props and use it to render or perform tasks.
The child components cannot modify the data directly; they can only notify the parent to update it using callback functions.
Why Important: The data source (state) is in one place, making debugging and maintenance easier.
*/