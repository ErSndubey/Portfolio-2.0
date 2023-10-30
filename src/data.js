import PI1 from "./Images/foodies.webp"
import PI2 from "./Images/Quora4College.webp"
import PI3 from "./Images/toDoApp.webp"
import PI4 from "./Images/oldPortfolio.webp"

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
    link: "https://quora4collage.vercel.app/index.html",
  },
  {
    title: "Tasker: TO-DO App",
    subtitle: "Javascript and BottStrap",
    description:
      "Presenting DOTO: Masterful Task Management Redefined! Developed using HTML, CSS, and JavaScript, amplified by Bootstrap for that sleek touch. Seamlessly add tasks, embellish them with descriptions and priorities. And the pièce de résistance? Your tasks are invincible—thanks to local storage wizardry, they persist through refreshes and shutdowns. Witness my skill in action, as I bring productivity to a new horizon",
    image: PI3,
    link: "https://tasker-ersndubey.vercel.app/",
  },
  {
    title: "Portfolio 1.0",
    subtitle: "HTML, CSS and Javascript",
    description:
      "Journey into My Web Universe: Explore my previous portfolio website, a creation fashioned with the trio of HTML, CSS, and JavaScript, elevated with the magic of Pure CSS. Traverse the interactive landscape, where design meets functionality. Immerse yourself in my earlier web prowess, witnessing the fusion of code and creativity that defines my digital footprint",
    image: PI4,
    link: "https://ersndubey.github.io/",
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
  {
    skillName : "React Js",
    skillImgURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    certification: "True",
    certificationText : "{ Meta Certified }",
    certificateLink : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
  },
  {
    skillName : "JavaScript",
    skillImgURL : "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    certification: "True",
    certificationText : "{ Meta Certified }",
    certificateLink : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
  },
  {
    skillName : "HTML 5",
    skillImgURL : "https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png"
  },
  {
    skillName : "CSS 3",
    skillImgURL : "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
  },
  
  {
    skillName : "Jest",
    skillImgURL : "https://docs.knapsackpro.com/images/blog/posts/run-jest-on-github-actions-with-parallelization/jest.png",
    certification: "True",
    certificationText : "{ Meta Certified }",
    certificateLink : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
  },
  {
    skillName : "Pthon",
    skillImgURL : "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
    certification: "True",
    certificationText : "{ Google Certified }",
    certificateLink : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
  },
  {
    skillName : "Github",
    skillImgURL : "data:image/png;base64,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"
  },
  {
    skillName : "Bootstrap",
    skillImgURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
  },
  {
    skillName : "Tailwid CSS",
    skillImgURL : "https://www.raycast.com/_next/image?url=https%3A%2F%2Ffiles.raycast.com%2Fsjxs3pxsc6k63ju0fzv8l3cu4v90&w=64&q=75"
  },
  {
    skillName : "Wordpress",
    skillImgURL : "data:image/png;base64,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"
  },
 


/*   "React",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "version control",
  "Java" */
  // Add more skill names here...
];

/* Certifications */
// certifications.js


export const certifications = [
  {
    id: 1,
    title: "Advance react Js",
    organization: "Meta [Facebook]",
    link:"https://media.licdn.com/dms/image/D4D22AQF3xeA7euqS3Q/feedshare-shrink_1280/0/1698641524752?e=1701302400&v=beta&t=ufKAsFffknGaQ5q9ajzIvpL-QwJkAdle7kX4r8x1VsY",
    verificationLink:"https://www.coursera.org/account/accomplishments/verify/QTSBKACCUJ5T",
  },
  {
    id: 2,
    title: "Programming with JavaScript",
    organization: "UpGrade",
    link:"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2DF938STQELS/CERTIFICATE_LANDING_PAGE~2DF938STQELS.jpeg",
    verificationLink:"https://www.coursera.org/account/accomplishments/verify/2DF938STQELS",
  },
  {
    id: 3,
    title: "javascript Essential Training",
    organization: "Linkedin",
    link:"https://media.licdn.com/dms/image/D4D22AQEE450qY2O-2w/feedshare-shrink_800/0/1693592915993?e=1699488000&v=beta&t=4oF7LyivR1TC9gFHxail9wz0ChinYvnimpi0NBDr59U",
    verificationLink:"https://www.linkedin.com/learning/certificates/28c7335fb260cafb99c838c5302584cdf9d4239cf78792d7e3dda8aecee19ef3",
  },
 
  // Add more certification objects as needed
];
