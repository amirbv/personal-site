import React, { useEffect, useState } from "react";
// import repos from '../data/repos';
import Repo from "./Repo";

export default (props) => {
  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState(0);

  useEffect(() => {
    let myRepos;

    const data = sessionStorage.getItem("repos");
    if (data) {
      myRepos = JSON.parse(data);

      setReposCount(myRepos.length);
      myRepos = myRepos.slice(0, 6);
      return setRepos(myRepos);
    }

    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/amirbv/repos');
      myRepos = await response.json();
    
      
      setReposCount(myRepos.length);
      sessionStorage.setItem("repos", JSON.stringify(myRepos));
      myRepos = myRepos.slice(0, 6);
      setRepos(myRepos);
    }
    fetchRepos();
  }, []);

  return (
    <div className="mx-auto max-w-4xl mt-8">
      <header className=" text-center">
        <h2 className="text-3xl font-bold">My repositories in GitHub</h2>
        <p>My personal projects and some collaborations</p>
      </header>
      <ul className="repos-list">
        {
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />
          })
        }
      </ul>
      <div className="mt-8 text-center">
        <a href="https://github.com/amirbv" className="btn inline-block" target="_blank" rel="noopener noreferrer">
          View more on GitHub ({reposCount})
        </a>
      </div>
    </div>
  );
}
