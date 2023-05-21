import govImage from './assets/gov-data-app-pic.png';
import redCross from './assets/RedCrossFlag.png';
import customerOne from './assets/55d80a24-7467-42f5-897a-5aa4a1f55d06.png';

export const projects = [
  {
    title: "Government Data Web App",
    subtitle: "REACT and API calls",
    description:
      "This Web App uses React and interrogates a Government API to show some data. Hosted on Firebase.",
    image: govImage,
    link: "https://gov-data-app.web.app/",
  },
  {
    title: "Triage Web App",
    subtitle: "HTML, CSS & JavaScript",
    description:
      "A triage App using JavaScript and CSS to filter what the user sees based on input.  WARNING: Don't use for actual triage.  It's just a demo. Hosted on Codepen.",
    image: redCross,
    link: "https://codepen.io/docdork/full/NWMWJoe",
  }
];

export const skills = [
  "HTML", "JavaScript", "CSS", "React" 
];

export const testimonials =[
  {
    quote: 'He feeds me.',
    image: customerOne,
    name: 'Scruffy',
    company: 'Just me'
  },
];