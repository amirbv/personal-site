import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./Posts"
import Certificate from "./Certificate"
import Courses from "./Courses"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          certificates {
            title
            score
            code
          }
          courses {
            title
            progress
            url
          }
        }
      }
    }
  `) //hook de gatsby
  console.log(data)
  return (
    <section>
      <div className="mt-24" id="certificates">
        <div className="max-w-4xl mx-auto">
          <Posts
            card={Certificate}
            data={data.codigofacilitoJson.data.certificates}
            title={"My online certificates on CodigoFacilito"}
          />
          <Posts
            card={Courses}
            data={data.codigofacilitoJson.data.courses}
            title={"My courses on CodigoFacilito"}
          />
        </div>
      </div>
    </section>
  )
}
