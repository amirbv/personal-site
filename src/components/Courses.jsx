import React, { Fragment } from 'react'

export default (props) => {
  const course = props.element;
  if (parseInt(course.progress) > 80) {
    return (
      <Fragment>
        <div className="shadow p-4 bg-white rounded flex flex-col justify-between">
          <h4 className="font-bold">
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              {course.title}
            </a>
          </h4>
          <div className="text-center">
            <span className="inline-block bg-indigo-100 text-indigo-700 p-2 mt-2 rounded">
              Progress: {parseInt(course.progress)}%
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
  return '';
}
