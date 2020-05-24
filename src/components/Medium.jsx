//MI URL
// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40amirbastidas
//URL de Uriel con items
// https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40uriel_hedz
import React, { Fragment, useState, useEffect } from 'react';
import Posts from './Posts';
import Post from './Post';


export default (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let myPosts;

    const data = sessionStorage.getItem("posts");
    if (data) {
      myPosts = JSON.parse(data);

      return setPosts(myPosts);
    }

    async function getMediumPosts() {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40uriel_hedz");
      myPosts = await response.json();
      console.log(myPosts);
      sessionStorage.setItem("posts", JSON.stringify(myPosts.items));
      setPosts(myPosts.items);
    }
    getMediumPosts();
  }, []);

  return (
    <Fragment>
      <div className="max-w-4xl mx-auto">
        <Posts
          data={posts}
          card={Post}
          title="Mis publicaciones en Medium"
        />
      </div>
    </Fragment>
  );
}
