import React from "react";
import Header from "../components/Header";
import Repos from "../components/Repos";
import CodigoFacilito from "../components/CodigoFacilito";
import Medium from "../components/Medium";
import EducationNav from "../components/EducationNav";

export default () => {
  return (
    <>
      <Header />
      <EducationNav />
      <Repos />
      <CodigoFacilito />
      {/* <Medium /> */}
    </>
  );
}
