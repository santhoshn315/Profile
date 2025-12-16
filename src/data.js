const portfolioData = {
  education: [
    {
      id: 1,
      degree: "M.Tech in Computer Science",
      school: "R V College of Engineering",
      year: "2021-2023",
      gpa: "8.94",
    },
    {
      id: 2,
      degree: "B.E in Information Science",
      school: "SJC Institute of Technology",
      year: "2016-2020",
      gpa: "7.3",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Software Engineer 2",
      company: "Microchip Technology",
      year: "Nov 2023 - Present",
      desc: "Developing peripheral libraries and application drivers for MCC Melody (MPLAB X IDE) with a React frontend and Spring Boot backend.",
    },
    {
      id: 2,
      role: "Software Intern ",
      company: "Microchip Technology",
      year: "Dec 2022 - Nov 2023",
      desc: "Built SDK and Python–React tools to streamline MCU peripheral configuration via GUI and datasheet diffing, boosting productivity for 30+ developers.",
    },
    {
      id: 3,
      role: "Systems Engineer",
      company: "Infosys",
      year: "Oct 2020 - Aug 2021",
      desc: "RESTful API development, Intutive front-ends and high-performance SQL tuning.",
    },
  ],

  skills: [
    "C/C++",
    "Javascript",
    "Python",
    "Java",
    "React.js",
    "Spring-boot",
    "SQL",
    "Git",
    "Linux",
  ],

  projects: [
    {
      id: 1,
      title: "Parallel Image Resizing with CUDA and Content-Aware Seam Carving",
      desc: "Implemented CUDA-accelerated content-aware seam carving for adaptive image resizing, achieving 2x-7x speedup over CPU implementations.",
      tags: ["C++", "CUDA"],
    },
    {
      id: 2,
      title: "Hodophile-Tales",
      desc: "A travel storytelling platform with JWT-based auth, CRUD, pagination, and tag-based search for rich content discovery.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Logging Library",
      desc: "Designed a high-performance C++ async logging library using a lock-free ring buffer, achieving 5x speedup over naive implementations.",
      tags: ["C++", "Multithreading"],
    },
  ],
};

export default portfolioData;
