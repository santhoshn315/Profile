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
      role: "Senior Engineer",
      company: "Qualcomm",
      year: "Apr 2026 - Present",
      desc: "",
    },
    {
      id: 2,
      role: "Software Engineer 2",
      company: "Microchip Technology",
      year: "Nov 2023 - Apr 2026",
      desc: "",
    },
    {
      id: 3,
      role: "Software Intern ",
      company: "Microchip Technology",
      year: "Dec 2022 - Nov 2023",
      desc: "",
    },
    {
      id: 4,
      role: "Systems Engineer",
      company: "Infosys",
      year: "Oct 2020 - Aug 2021",
      desc: "",
    },
  ],

  skills: [
    "C/C++",
    "Javascript",
    "Python",
    "React.js",
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
