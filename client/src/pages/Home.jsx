import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam!",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus provident unde eum repellat voluptatem quisquam iusto qui dolor eligendi. Neque, rem ratione tempora nihil ut corrupti laboriosam quae tenetur?",
  //     img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam!",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus provident unde eum repellat voluptatem quisquam iusto qui dolor eligendi. Neque, rem ratione tempora nihil ut corrupti laboriosam quae tenetur?",
  //     img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam!",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus provident unde eum repellat voluptatem quisquam iusto qui dolor eligendi. Neque, rem ratione tempora nihil ut corrupti laboriosam quae tenetur?",
  //     img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam!",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus provident unde eum repellat voluptatem quisquam iusto qui dolor eligendi. Neque, rem ratione tempora nihil ut corrupti laboriosam quae tenetur?",
  //     img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  //   },
  // ];

const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
