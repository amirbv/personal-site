import React, { Fragment } from 'react';

export default (props) => {
  const post = props.element;
  return (
    <Fragment>
      <div className="shadow bg-white rounded flex flex-col justify-between overflow-hidden">
        <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }}></header>
        <div className="p-4">
          <h4 className="font-bold">
            {post.title}
          </h4>
          <div className="text-center mt-8">
            <a className="btn inline-block" href={post.link} target="_blank" rel="noopener noreferrer">Read</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
