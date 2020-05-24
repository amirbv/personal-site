import React from 'react';

export default () => {
  return (
    <form className="mt-16 text-center">
      <label
        htmlFor="contact-content"
        className="block text-gray-600 text-sm font-bold mb-2"
      >Tell me your idea to make it true</label>
      <div className="flex flex-col md:flex-row shadow rounded bg-white border p-2">
        <textarea
          id="contact-content"
          name="contact-content"
          className="flex-1 py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline resize-none"
        ></textarea>
        <button className="btn mt-4 md:mt-0 md:ml-4">Enviar</button>
      </div>
    </form>
  );
}

