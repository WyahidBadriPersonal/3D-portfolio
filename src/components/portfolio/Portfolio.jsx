import React from "react";
import "./portfolio.css";

const projects =[
  {
    id:1,
    title:"BitesOfNYC",
    image:"/bitesofnyc-preview.png",
    description:"Full stack food review blog with user authentication, user profiles, protected routes, comments, and likes. Admin can create, update, and delete posts.",
    link:"BitesOfNYC.com",
    technologies:["MongoDB", "Express", "React", "Node"]
},
{
  id:2,
  title:"Country Explorer",
  image:"/countryexplorer.png",
  description:"Users can search for a country, see a list of facts about the country",
  link:"https://wb-country-explorer.netlify.app/",
  technologies:["TypeScript", "API", "React", "Tailwind"]
},
{
  id:3,
  title:"Admin Dashboard",
  image:"/admindashboard.png",
  description:"Fully animated admin dashboard layout with multiple pages and menus",
  link:"https://wb-admin-dashboard.netlify.app/",
  technologies:["ReCharts", "FramerMotion", "React", "Tailwind"]
}
]
const Portfolio = () => {
  return <div className="portfolio">projects</div>;
};

export default Portfolio;
