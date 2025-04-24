import React from "react";
import "./service.css";
import BodyContent from "../../Compornents/BodyContent/BodyContent";
import logo from "../../assets/logo.png";
import FooterContent from "../../Compornents/FooterContent/FooterContent";
import SmoothJourney from "../../Compornents/ServicePageContent/SmoothJourney";
import TransferServices from "../../Compornents/ServicePageContent/TransferServices";
import ProfessionalServices from "../../Compornents/ServicePageContent/ProfessionalServices";

function Service() {
  return (
    <BodyContent>
      <TransferServices></TransferServices>
      <SmoothJourney></SmoothJourney>
      <ProfessionalServices></ProfessionalServices>
      <FooterContent src={logo}></FooterContent>
    </BodyContent>
  );
}

export default Service;
