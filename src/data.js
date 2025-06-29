import govImage from "./assets/gov-data-app-pic.png";
import redCross from "./assets/RedCrossFlag.png";
import customerOne from "./assets/55d80a24-7467-42f5-897a-5aa4a1f55d06.png";
import foodPic from "./assets/brooke-lark-jUPOXXRNdcA-unsplash.png";
import hospitalPic from "./assets/2IMG_061.jpeg";
import rcdmPic from "./assets/RCDM.png";
import turtle from "./assets/turtle.png";

export const projects = [
  {
    title: "Diving With the Injured Website",
    subtitle: "REACT",
    description:
      "A REACT web App for a charity that provides scuba diving experiences for injured service personnel.  Built with React and hosted on Netlify.",
    image: turtle,
    link: "https://divingwiththeinjured.netlify.app/",
  },
  {
    title: "Patient Information System",
    subtitle: "MERN Stack",
    description:
      "A full stack MERN application for managing patient information.  Built with React, Node.js, Express, and MongoDB.",
    image: hospitalPic,
    link: "https://patient-info-system.netlify.app/",
  },
  {
    title: "Armed Forces Covenant Web App",
    subtitle: "REACT",
    description:
      "A web application for the Armed Forces Covenant, built with React. It allows users to view event information and register attendance.",
    image: rcdmPic,
    link: "https://uhb-rcdm-expo.netlify.app/",
  },
  {
    title: "Eating Timer App - iOS",
    subtitle: "React Native",
    description:
      "This is a simple food timer for those following the 20/20/20 eating habit.  Built in React Native and deployed using Expo.",
    image: foodPic,
    link: "https://apps.apple.com/gb/app/janes-food-app/id6455685106",
  },
  {
    title: "Eating Timer App - Android",
    subtitle: "React Native",
    description:
      "This is a simple food timer for those following the 20/20/20 eating habit.  Built in React Native and deployed using Expo.",
    image: foodPic,
    link: "https://play.google.com/store/apps/details?id=com.docdork.janesfoodtimer&pcampaignid=web_share",
  },
  {
    title: "Government Data Web App",
    subtitle: "REACT and API calls",
    description:
      "This Web App uses React and interrogates a Government API to show some data. Hosted on Firebase.",
    image: govImage,
    link: "https://bucolic-swan-a71497.netlify.app/",
  },
  {
    title: "Triage Web App",
    subtitle: "HTML, CSS & JavaScript",
    description:
      "A triage App using JavaScript and CSS to filter what the user sees based on input.  WARNING: Don't use for actual triage.  It's just a demo. Hosted on Codepen.",
    image: redCross,
    link: "https://codepen.io/docdork/full/NWMWJoe",
  },
];

export const skills = [
  "MERN Stack",
  "React & React Native",
  "HTML, JavaScript, CSS",
  "Angular",
  "Ionic",
];

export const testimonials = [
  {
    quote: "He feeds me.",
    image: customerOne,
    name: "Scruffy",
    company: "Just me",
  },
];
