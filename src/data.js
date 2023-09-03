import PI1 from "./Images/foodies.jpeg"
import PI2 from "./Images/Quora4College.png"
import PI3 from "./Images/toDoApp.jpeg"
import PI4 from "./Images/oldPortfolio.png"

export const projects = [
  {
    title: "Foodies",
    subtitle: "React Js, Tailwind CSS, API's",
    description:
      "Foodies, a configuration-driven UI, mirrors the live Swiggy experience by seamlessly integrating with real-time data. This innovative interface adeptly adapts to the user's current location, effortlessly fetching nearby restaurants. Powered by dynamic configurations, it's a testament to my UI development and front-end skills, bringing real-world utility to life.",
    image: PI1,
    link: "https://foodies-ersndubey.vercel.app/",
  },
  {
    title: "Quora4College",
    subtitle: "React and Tailwind",
    description:
      "A React and Tailwind CSS-based web app, emulating the renowned Quora platform. Leveraging the Quora API, this clone offers seamless access to user information and question-answer interactions. Tailored for college students, it brings a familiar yet focused Q&A experience. Witness my UI proficiency and API integration in action.",
    image: PI2,
    link: "https://reedbarger.com",
  },
  {
    title: "Tasker: TO-DO App",
    subtitle: "Javascript and BottStrap",
    description:
      "Presenting DOTO: Masterful Task Management Redefined! Developed using HTML, CSS, and JavaScript, amplified by Bootstrap for that sleek touch. Seamlessly add tasks, embellish them with descriptions and priorities. And the pièce de résistance? Your tasks are invincible—thanks to local storage wizardry, they persist through refreshes and shutdowns. Witness my skill in action, as I bring productivity to a new horizon",
    image: PI3,
    link: "https://jsbootcamp.com",
  },
  {
    title: "Portfolio 1.0",
    subtitle: "HTML, CSS and Javascript",
    description:
      "Journey into My Web Universe: Explore my previous portfolio website, a creation fashioned with the trio of HTML, CSS, and JavaScript, elevated with the magic of Pure CSS. Traverse the interactive landscape, where design meets functionality. Immerse yourself in my earlier web prowess, witnessing the fusion of code and creativity that defines my digital footprint",
    image: PI4,
    link: "https://pythonbootcamp.com",
  },
];

// Testimonials data
export const testimonials = [
  {
    name: "John Doe",
    company: "ABC Inc.",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path_to_image1.jpg",
  },
  {
    name: "Jane Smith",
    company: "XYZ Corp.",
    quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "path_to_image2.jpg",
  },
  // Add more testimonials here...
];

// Skills data
export const skills = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "version control",
  "Java"
  // Add more skill names here...
];

/* Certifications */
// certifications.js


export const certifications = [
  {
    id: 1,
    title: "Master the Node.js Fundamentals",
    organization: "Scaler",
    link:"https://moonshot.scaler.com/s/image/sl/zpfRNxTW7H?scope=body",
    verificationLink:"https://moonshot.scaler.com/s/sl/zpfRNxTW7H?_gl=1*1r0es0t*_ga*MTQ3NTk4MDI2Mi4xNjkzMjQxMDk5*_ga_53S71ZZG1X*MTY5MzY3MDY1MC43LjAuMTY5MzY3MDY1MC4wLjAuMA..",
  },
  {
    id: 2,
    title: "React Developer Certification",
    organization: "UpGrade",
    link:"https://raw.githubusercontent.com/ErSndubey/Portfolio-2.0/master/src/Images/React_js_certificate.png",
    verificationLink:"https://upgrad.verification.givemycertificate.com/v/1a8e4365-a5b2-4431-b85f-07a7f55d659b",
  },
  {
    id: 3,
    title: "javascript Essential Training",
    organization: "Linkedin",
    link:"https://media.licdn.com/dms/image/D4D22AQEE450qY2O-2w/feedshare-shrink_1280/0/1693592915993?e=1696464000&v=beta&t=9KXWOvbMMYI9tumTuL4_ZOrQWZvMenuxPwZoiNaoeME",
    verificationLink:"https://www.linkedin.com/learning/certificates/28c7335fb260cafb99c838c5302584cdf9d4239cf78792d7e3dda8aecee19ef3",
  },
 
  // Add more certification objects as needed
];
