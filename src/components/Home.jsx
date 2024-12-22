import React, { useEffect, useState } from 'react'
import BlogLIst from './BlogLIst';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  //useEffect - useEffect was automattically  called when the component is rendered or re-rendered.
  // useEffect(() => {
  //   console.log('use effect run')
  // }); 

  //if you don't want to call useEffect after every render, you can pass a second argument to useEffect.It call useEffect dependencies.
  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(blogs);
  // },[]); //if you pass an empty array, it will only run once when the component is first rendered.

  const [name,setName]= useState('Joy');

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  },[name]); // if you pass name as a dependency, it will run every time when name changes.

  return (
    <div className="home">
      <BlogLIst blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <button onClick={() => {setName('Pranto')}}>change name</button>
      <p>My name is {name}</p>

    </div>
  )
}

export default Home