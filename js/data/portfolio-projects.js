const projectsData = [
  // {
  //   id: "manage",
  //   name: "Manage",
  //   description:
  //     "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  //   descriptionLong:
  //     "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  //   keywords: {
  //     category: ["Interaction Design", "Front End Development"],
  //     tech: ["HTML", "CSS", "JS"],
  //   },
  //   figure: {
  //     thumb: "image-portfolio-manage@2x.jpg",
  //     hero: "image-manage-hero@2x.jpg",
  //     preview: [
  //       "image-manage-preview-1@2x.jpg",
  //       "image-manage-preview-2@2x.jpg",
  //     ],
  //   },
  //   url: "#",
  // },
  {
    id: "xboard",
    name: "XBoard",
    description:
      "This is a simple news feed that displays news about three different subjects.",
    descriptionLong:
      "This project was made as part of my Crio Full-Stack learning journey.\r\n\nThe news feed displays news on subjects of COVID-19, India Tech and Sportstar. App is built using vanilla JS and utilizes the Bootstrap CSS framework to implement the logic for accordion and carousel functionality. These components were then further customized by me to satisfy the design requirements.\r\n\nThe app fetches data on latest ten articles for each subject in the form of RSS feed (which is converted to JSON) and then displays it. User can then flip through the stub articles one by one and if they wish to learn more about the subject, they can follow the link to the published article.",
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
    },
    figure: {
      thumb: "image-xboard-portfolio.jpg",
      hero: "image-xboard-hero.jpg",
      preview: [
        "image-xboard-preview1.jpg",
        "image-xboard-preview2.jpg",
        "image-xboard-preview3.jpg",
      ],
    },
    url: "https://crio-xboard.onrender.com",
  },
  {
    id: "qtrip",
    name: "QTrip",
    description:
      "This is a travel website that allows users to book adventures across the world and check on their reservations.",
    descriptionLong:
      "This project was made as part of my Crio Full-Stack learning journey.\r\n\nThis dynamic website allows users to check out diffrent adventures and book them if they find them interesting. Adventures themselves are sorted by city. When a city is selected, available adventures in that city can then be filtered further by their duration and category. When an adventure is selected, it can then be reserved. User can also check on their previous reservations at any time.\r\n\nUser interface was built with the help of Bootstrap CSS framework. In the backgroud, app fetches required data from a REST API, which was provided in advance. This project introduced me to asynchronous JS programming. It was a huge step in my journey to become a fully fledged JS developer.",
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
    },
    figure: {
      thumb: "image-qtrip-portfolio.jpg",
      hero: "image-qtrip-hero.jpg",
      preview: [
        "image-qtrip-preview1.jpg",
        "image-qtrip-preview2.jpg",
        "image-qtrip-preview3.jpg",
        "image-qtrip-preview4.jpg",
      ],
    },
    url: "https://crio-qtrip.onrender.com",
  },
  {
    id: "qkart",
    name: "QKart",
    description:
      "This is a shopping website that allows users to register, login, search products and use a checkout feature.",
    descriptionLong:
      "This project was made as part of my Crio Full-Stack learning journey.\r\n\nThis is a shopping website and users must register an account to be able to use it's full features. Login feature is implemented using bearer token authentication. When user sucessfully registers and logs in, they are given a cash balance which they can then spend how they see fit. They can search for products, add them to cart, register an address and finalize their purchase at the checkout page.\r\n\nUser inteface was built using the React library along with MUI component library. In the background, app talks to a REST API which was provided in advance. While working on this website, I learned the concept of client-side routing, how to utilize browser storage API and solidified my previous knowledge of React library and it's working concepts.",
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS", "React", "Axios", "MUI"],
    },
    figure: {
      thumb: "image-qkart-portfolio.jpg",
      hero: "image-qkart-hero.jpg",
      preview: [
        "image-qkart-preview1.jpg",
        "image-qkart-preview2.jpg",
        "image-qkart-preview3.jpg",
        "image-qkart-preview4.jpg",
        "image-qkart-preview5.jpg",
      ],
    },
    url: "https://crio-qkart.onrender.com",
  },
  {
    id: "xflix",
    name: "XFlix",
    description:
      "A video streaming platform which provides content to watch and also allows users to upload thir own videos.",
    descriptionLong:
      "This project was made as part of my Crio Full-Stack learning journey.\r\n\nThe streaming platform features a dashboard view, where users can filter available videos by their title, content category and age rating. Content can also be sorted according to its upload date or view count. When a video is clicked, user is redirected to a video player, where they can watch the video and rate it accordingly. Video player is implemented using an iframe, which displays an embedded Youtube video.\r\n\nUser inteface for the platform was built using the React library along with MUI component library. Site is not yet fully functional as it uses a Postman mock API to fetch mock data. The website will be connected to a working backend later, when my Crio learning journey switches it's focus to backend programming.",
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS", "React", "Axios", "MUI", "Postman"],
    },
    figure: {
      thumb: "image-xflix-portfolio.jpg",
      hero: "image-xflix-hero.jpg",
      preview: [
        "image-xflix-preview1.jpg",
        "image-xflix-preview2.jpg",
        "image-xflix-preview3.jpg",
      ],
    },
    url: "https://crio-xflix.onrender.com",
  },
  {
    id: "calculator",
    name: "Calculator",
    description:
      "The calculator I developed allows the user to do simple arithmetic operations like addition, subtraction, multiplication and division.",
    descriptionLong:
      "Calculators logic was written using the OOP paradigm to organize code. For it's layout, CSS grid and flexbox were used. If a number is divided by 0, the calculator will also display an error.",
    keywords: {
      category: ["Front End Development", "OOP"],
      tech: ["HTML", "CSS", "JS"],
    },
    figure: {
      thumb: "image-calculator-portfolio.jpg",
      hero: "image-calculator-hero.jpg",
      preview: [
        "image-calculator-preview1.jpg",
        "image-calculator-preview2.jpg",
        "image-calculator-preview3.jpg",
      ],
    },
    url: "https://basic-calculator-bj.onrender.com",
  },
  {
    id: "social-proof-section",
    name: "Social Proof Section",
    description:
      "This is a social proof static website of a fictional company.",
    descriptionLong:
      "The website is static and responsive. For layout purposes, I used the CSS Flexbox module. CSS code was written and organized with the help of SASS preprocessor and using BEM notation.\r\n\nThe design was provided as part of a front-end-mentor challenge.",
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "SASS"],
    },
    figure: {
      thumb: "image-social-proof-portfolio.jpg",
      hero: "image-social-proof-hero.jpg",
      preview: [
        "image-social-proof-preview1.jpg",
        "image-social-proof-preview2.jpg",
        "image-social-proof-preview3.jpg",
      ],
    },
    url: "https://social-proof-section-bj.onrender.com",
  },
  {
    id: "user-list",
    name: "User List",
    description:
      "This is a simple app that allows to save a list of usernames along with age.",
    descriptionLong:
      'The app saves a list of usernames along with age and also allows to later edit or delete the items from list. If input is invalid, a modal window will alert the user.\r\n\nThis project was my first attempt in using the React library. It allowed me to practice React concepts such as state management, passing data between components through props, "lifing state up", conditional rendering, using portals and more. It made me realize the potential that React library offers when building user interfaces.',
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS", "React"],
    },
    figure: {
      thumb: "image-user-list-portfolio.jpg",
      hero: "image-user-list-hero.jpg",
      preview: [
        "image-user-list-preview1.jpg",
        "image-user-list-preview2.jpg",
        "image-user-list-preview3.jpg",
      ],
    },
    url: "https://user-list-bj.onrender.com",
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe (Unfinished)",
    description: "It is a game of Tic-Tac-Toe.",
    descriptionLong:
      'This is an app that "will" allow two users to play a game of tic-tac-toe against each other and allow one user to play against a cpu.\r\n\nIt is written in vanilla JS. For layout purposes, CSS Flexbox and CSS Grid are used. Design file was provided as part of a Front-end mentor challenge. App is still under development.',
    keywords: {
      category: ["Front End Development"],
      tech: ["HTML", "CSS", "JS"],
    },
    figure: {
      thumb: "image-tic-tac-toe-portfolio.jpg",
      hero: "image-tic-tac-toe-hero.jpg",
      preview: [
        "image-tic-tac-toe-preview1.jpg",
        "image-tic-tac-toe-preview2.jpg",
      ],
    },
    url: "https://tic-tac-toe-bj.onrender.com",
  },
];

export { projectsData };
