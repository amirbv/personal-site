import React from 'react';
import { Link, graphql } from 'gatsby';
import EducationNav from '../components/EducationNav';

export default (props) => {
  const pageData = props.data.educationJson;
  return (
    <div>
      <header className="py-8 border-indigo-500 border-solid border-t-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/`} className="uppercase underline text-teal-500">Back to home</Link>
          <h2 className="capitalize text-4xl font-bold">{pageData.title}</h2>
          <p className="text-xl">{pageData.description}</p>
        </div>
      </header>
      <ul>
        {
          pageData.items.map((item, index) => {
            return (
              <li key={index} className="bg-white shadow mt-4 flex">
                <p className="vertical-text">{pageData.slug}</p>
                <div className="flex flex-col sm:flex-row sm:items-center flex-1 p-8">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{item.name}</h3>
                    <h4>{item.institution}</h4>
                    {
                      item.degree && <span
                        className="inline-block p-2 rounded bg-indigo-100 text-indigo-700"
                      >{item.degree}</span>
                    }
                    {
                      item.url && <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn inline-block mt-4"
                      >Visit</a>
                    }
                  </div>
                  {
                    item.score && <div className="inline-block">
                      <span className="inline-block p-2 text-xl text-green-700 bg-green-100">{item.score}</span>
                    </div>
                  }
                </div>
              </li>
            );
          })
        }
      </ul>
      <EducationNav />
    </div>
  );
}

export const query = graphql`
  query($slug : String){
    educationJson(slug: {eq: $slug}) {
      title
      description
      slug
      items{
        name
        institution
        degree
        score
        url
      }
    }
  }
`;