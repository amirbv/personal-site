import React, { Fragment } from 'react'

export default (props) => {
  return (
    <Fragment>
      <h2 className="text-3xl font-bold text-center mt-12">
        {props.title}
      </h2>
      <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {
          props.data.map((element, index) => {
            return <props.card element={element} key={index} />
          })
        }
      </div>
    </Fragment>
  );
}
