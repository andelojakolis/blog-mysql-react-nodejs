import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
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
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
