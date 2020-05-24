import React, { Fragment } from 'react'

export default (props) => {
  const certificate = props.element;
  return (
    <Fragment>
      <div className="shadow p-4 bg-white rounded flex flex-col justify-between">
        <h4 className="font-bold">{certificate.title}</h4>
        <div className="text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 p-2 mt-2 rounded">
            Score: {certificate.score}
          </span>
        </div>
      </div>
    </Fragment>
  );
}
