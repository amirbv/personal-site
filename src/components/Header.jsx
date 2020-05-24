import React from 'react';
import illustration from '../images/undraw_app_wireframe_9ssu.svg';
import ContactForm from './ContactForm';

export default () => {
  return (
    <header className="bg-teal-200">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-6xl leading-none font-semibold text-indigo-700">Hi! I'm Amir Bastidas</h1>
            <p className="text-xl font-light text-gray-700 py-3">I'm a frontend web developer and a React & Vue learner</p>
          </div>
          <img src={illustration} alt="Men with a wireframe" style={{height: '300px'}} />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </header>
  );
}


