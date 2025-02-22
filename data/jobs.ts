const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "$70,000 - $90,000", requiredSkills: ["React", "Next.js", "JavaScript", "Tailwind CSS"], matchScore: 85 },
    { id: 2, title: "Full Stack Developer", company: "InnovateX", location: "New York, USA", salary: "$90,000 - $110,000", requiredSkills: ["React", "Node.js", "TypeScript", "GraphQL"], matchScore: 80 },
    { id: 3, title: "Backend Engineer", company: "CloudSoft", location: "San Francisco, USA", salary: "$100,000 - $130,000", requiredSkills: ["Node.js", "Express", "MongoDB", "Docker"], matchScore: 78 },
    { id: 4, title: "Software Engineer", company: "ByteWave", location: "Remote", salary: "$85,000 - $105,000", requiredSkills: ["Python", "Django", "PostgreSQL", "AWS"], matchScore: 82 },
    { id: 5, title: "Mobile Developer", company: "AppGenie", location: "London, UK", salary: "£60,000 - £80,000", requiredSkills: ["React Native", "Expo", "TypeScript"], matchScore: 87 },
    { id: 6, title: "Data Scientist", company: "AI Labs", location: "Berlin, Germany", salary: "€80,000 - €100,000", requiredSkills: ["Python", "TensorFlow", "SQL", "Pandas"], matchScore: 83 },
    { id: 7, title: "DevOps Engineer", company: "CloudScale", location: "Remote", salary: "$95,000 - $120,000", requiredSkills: ["AWS", "Terraform", "Kubernetes", "CI/CD"], matchScore: 81 },
    { id: 8, title: "Cybersecurity Analyst", company: "SecureNet", location: "Austin, USA", salary: "$90,000 - $110,000", requiredSkills: ["Penetration Testing", "SIEM", "Firewalls"], matchScore: 79 },
    { id: 9, title: "Product Designer", company: "Designify", location: "Toronto, Canada", salary: "CAD 85,000 - CAD 110,000", requiredSkills: ["Figma", "Sketch", "UI/UX", "User Research"], matchScore: 84 },
    { id: 10, title: "Machine Learning Engineer", company: "DeepMind AI", location: "Remote", salary: "$110,000 - $140,000", requiredSkills: ["Python", "PyTorch", "Deep Learning"], matchScore: 88 },
    { id: 11, title: "iOS Developer", company: "Apple Inc.", location: "Cupertino, USA", salary: "$120,000 - $150,000", requiredSkills: ["Swift", "Objective-C", "iOS SDK"], matchScore: 86 },
    { id: 12, title: "Android Developer", company: "Google", location: "Mountain View, USA", salary: "$110,000 - $140,000", requiredSkills: ["Kotlin", "Java", "Android SDK"], matchScore: 89 },
    { id: 13, title: "AI Research Scientist", company: "OpenAI", location: "San Francisco, USA", salary: "$150,000 - $200,000", requiredSkills: ["Deep Learning", "Transformers", "LLMs"], matchScore: 92 },
    { id: 14, title: "Blockchain Developer", company: "CryptoSoft", location: "Remote", salary: "$100,000 - $130,000", requiredSkills: ["Solidity", "Ethereum", "Web3.js"], matchScore: 77 },
    { id: 15, title: "Embedded Systems Engineer", company: "Tesla", location: "Austin, USA", salary: "$95,000 - $120,000", requiredSkills: ["C", "C++", "RTOS"], matchScore: 81 },
    { id: 16, title: "Cloud Architect", company: "Amazon AWS", location: "Seattle, USA", salary: "$140,000 - $170,000", requiredSkills: ["AWS", "Kubernetes", "Terraform"], matchScore: 90 },
    { id: 17, title: "Game Developer", company: "Epic Games", location: "Cary, USA", salary: "$85,000 - $110,000", requiredSkills: ["Unreal Engine", "C++", "Blueprints"], matchScore: 82 },
    { id: 18, title: "Technical Writer", company: "DocsTech", location: "Remote", salary: "$70,000 - $85,000", requiredSkills: ["Markdown", "API Documentation", "Technical Writing"], matchScore: 84 },
    { id: 19, title: "QA Engineer", company: "TestPro", location: "Remote", salary: "$75,000 - $95,000", requiredSkills: ["Selenium", "Cypress", "Test Automation"], matchScore: 79 },
    { id: 20, title: "IoT Engineer", company: "SmartHome Tech", location: "San Diego, USA", salary: "$90,000 - $115,000", requiredSkills: ["IoT", "MQTT", "Raspberry Pi"], matchScore: 76 },
    {
      id: 21,
      title: "Frontend Developer",
      company: "Google",
      salary: "$120,000 - $150,000",
      location: "Mountain View, CA",
      matchScore: 85,
      requiredSkills: ["React.js", "JavaScript", "TypeScript", "CSS", "Next.js"]
    },
    {
      id: 22,
      title: "Backend Engineer",
      company: "Amazon",
      salary: "$110,000 - $140,000",
      location: "Seattle, WA",
      matchScore: 78,
      requiredSkills: ["Node.js", "Express.js", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 23,
      title: "Full Stack Developer",
      company: "Microsoft",
      salary: "$130,000 - $160,000",
      location: "Redmond, WA",
      matchScore: 90,
      requiredSkills: ["React.js", "Node.js", "GraphQL", "SQL", "Azure"]
    },
    {
      id: 24,
      title: "Software Engineer",
      company: "Facebook",
      salary: "$140,000 - $180,000",
      location: "Menlo Park, CA",
      matchScore: 88,
      requiredSkills: ["Python", "Django", "GraphQL", "PostgreSQL", "Kubernetes"]
    },
    {
      id: 25,
      title: "DevOps Engineer",
      company: "Netflix",
      salary: "$135,000 - $165,000",
      location: "Los Gatos, CA",
      matchScore: 82,
      requiredSkills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      id: 26,
      title: "Data Scientist",
      company: "Tesla",
      salary: "$125,000 - $155,000",
      location: "Palo Alto, CA",
      matchScore: 79,
      requiredSkills: ["Python", "Pandas", "Machine Learning", "TensorFlow", "SQL"]
    },
    {
      id: 27,
      title: "Cybersecurity Analyst",
      company: "IBM",
      salary: "$110,000 - $135,000",
      location: "Austin, TX",
      matchScore: 70,
      requiredSkills: ["Network Security", "SIEM", "Firewalls", "Penetration Testing", "Linux"]
    },
    {
      id: 28,
      title: "Blockchain Developer",
      company: "Coinbase",
      salary: "$140,000 - $170,000",
      location: "San Francisco, CA",
      matchScore: 85,
      requiredSkills: ["Solidity", "Ethereum", "Web3.js", "Rust", "Smart Contracts"]
    },
    {
      id: 29,
      title: "AI Engineer",
      company: "OpenAI",
      salary: "$150,000 - $200,000",
      location: "San Francisco, CA",
      matchScore: 92,
      requiredSkills: ["Python", "Deep Learning", "Transformers", "PyTorch", "TensorFlow"]
    },
    {
      id: 30,
      title: "Mobile App Developer",
      company: "Uber",
      salary: "$120,000 - $145,000",
      location: "San Francisco, CA",
      matchScore: 77,
      requiredSkills: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"]
    },
    {
      id: 31,
      title: "Game Developer",
      company: "Epic Games",
      salary: "$110,000 - $140,000",
      location: "Cary, NC",
      matchScore: 75,
      requiredSkills: ["C++", "Unreal Engine", "Game Physics", "Shaders", "AI Programming"]
    },
    {
      id: 32,
      title: "Cloud Engineer",
      company: "Oracle",
      salary: "$125,000 - $155,000",
      location: "Redwood City, CA",
      matchScore: 80,
      requiredSkills: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      id: 33,
      title: "Embedded Systems Engineer",
      company: "Intel",
      salary: "$115,000 - $140,000",
      location: "Santa Clara, CA",
      matchScore: 72,
      requiredSkills: ["C", "C++", "RTOS", "Microcontrollers", "PCB Design"]
    },
    {
      id: 34,
      title: "AR/VR Developer",
      company: "Meta",
      salary: "$130,000 - $165,000",
      location: "Menlo Park, CA",
      matchScore: 83,
      requiredSkills: ["Unity", "C#", "3D Modeling", "OpenXR", "ARKit"]
    },
    {
      id: 35,
      title: "Technical Product Manager",
      company: "Spotify",
      salary: "$140,000 - $170,000",
      location: "New York, NY",
      matchScore: 87,
      requiredSkills: ["Agile", "Scrum", "Product Strategy", "Data Analytics", "SQL"]
    }
  ];
  
  export default jobs;
  