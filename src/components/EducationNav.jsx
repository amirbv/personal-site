import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default (props) => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson{
        edges{
          node{
            slug
            title
            description
          }
        }
      }
    }
  `) //hook de gatsby

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center">My academic formation</h2>
      <nav className="grid justify-center md:grid-cols-3 gap-4 mt-4">
        {
          data.allEducationJson.edges.map((element, index) => {
            const { node } = element;
            return (
              <article key={index} className="flex flex-col justify-between bg-white shadow m-2 max-w-sm p-4">
                <header>
                  <p className="font-bold leading-loose">{node.title}</p>
                  <div className="mt-4">
                    <p className="font-light">{node.description}</p>
                  </div>
                </header>
                <div className="text-center mt-4">
                  <Link to={`/${node.slug}`} className="btn inline-block">Go</Link>
                </div>
              </article>
            );
          })
        }
      </nav>
    </div>
  );
}
