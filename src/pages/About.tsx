import Hero from "../components/HeroAbout";
import WhoWeAre from "../contents/WhoWeAre";
import OurEthics from "../contents/OurEthics";
import OurServices from "../components/OurServices";
import PartnerCompanies from "../components/PartnerCompanies";

export default function About() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <OurEthics />
      <OurServices />
      <PartnerCompanies />
    </div>
  );
}