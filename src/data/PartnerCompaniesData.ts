import jpzLogo from "../assets/logo/JPZ.png";
import fervidLogo from "../assets/logo/fervid.png";
import summerfieldLogo from "../assets/logo/summerfield.png";
import dconLogo from "../assets/logo/dcon.png";
import denitexLogo from "../assets/logo/denitex.png";
import swapnoLogo from "../assets/logo/swapno.png";


export type PartnerProject = {
  label: string;
};

export type Partner = {
  id: number;
  name: string;
  logo: string;
  years: number;
  tagline: string;
  description: string;
  projects?: PartnerProject[];
  fleet?: string;
};

export const PartnerCompaniesData: Partner[] = [
  {
    id: 1,
    name: "JPZ Consulting (Bangladesh) Ltd.",
    logo: jpzLogo, 
    years: 10,
    tagline: "Government Project Vehicles",
    description:
      "For the past 10 years, we have been supplying vehicles to JPZ Consulting for a wide range of government projects. We provide a versatile fleet consisting of 4 Toyota Hiace vans, 2 sedans, and 2 Toyota Noah vehicles, ensuring smooth and reliable transportation for field teams and project operations.",
    projects: [
      { label: "BIWTA (Bangladesh Inland Water Transport Authority)" },
      { label: "Department of Fisheries" },
      { label: "Bangladesh Bridge Authority" },
      { label: "Roads and Highways Department (RHD) Projects" },
      { label: "Department of Livestock Projects" },
    ],
    fleet: "4 Toyota Hiace vans, 2 sedans, 2 Toyota Noah vehicles",
  },
  {
    id: 2,
    name: "Fervid Engineering and Consultancy",
    logo: fervidLogo,
    years: 9,
    tagline: "Engineering & Field Consultancy",
    description:
      "We have been providing dependable Rent-A-Car services for 9 years, supporting their engineering and field-based consultancy activities with flexible and efficient vehicle options.",
  },
  {
    id: 3,
    name: "Denitex",
    logo: denitexLogo,
    years: 5,
    tagline: "Operational & Staff Transport",
    description:
      "For the last 5 years, we have supported their operational and staff transportation needs with a range of vehicles.",
  },
  {
    id: 4,
    name: "Summerfield International School",
    logo: summerfieldLogo,
    years: 7,
    tagline: "Safe School Transportation",
    description:
      "For 7 years, we have delivered safe, consistent, and punctual transportation services for their school operations.",
  },
  {
    id: 5,
    name: "Decon Design Studio",
    logo: dconLogo,
    years: 5,
    tagline: "Consultancy & Field Projects",
    description:
      "Over the past 5 years, we have offered dedicated and tailored Rent-A-Car solutions to support their consultancy and field project requirements.",
  },
  {
    id: 6,
    name: "Swapno & ACI",
    logo: swapnoLogo,
    years: 1,
    tagline: "Operational Transport Support",
    description:
      "Over the past year, we have offered dedicated and tailored Rent-A-Car solutions to support their operations.",
  },
];

export const PARTNER_TRACK_RECORD = {
  heading: "Experience & Track Record",
  body: "With over 22 years of experience, we have earned the trust of government agencies, consultancy firms, private organizations, and educational institutions across Bangladesh. We provide reliable, professional, and efficient Rent-A-Car services with a diverse fleet that supports both long-term and short-term project needs.",
};