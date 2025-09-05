export const team = [
  { id: 1, name: "Aisha Khan", role: "UI Designer", location: "Kolkata", skills: ["Figma", "CSS", "Design Systems"] },
  { id: 2, name: "Ravi Sharma", role: "Frontend Dev", location: "Bengaluru", skills: ["HTML", "CSS", "Accessibility"] },
  { id: 3, name: "Meera Patel", role: "Graphic Designer", location: "Pune", skills: ["Illustrator", "Branding", "Iconography"] },
  { id: 4, name: "Arjun Singh", role: "UI Designer", location: "Delhi", skills: ["Wireframing", "Prototyping", "Tailwind"] },
  { id: 5, name: "Neha Verma", role: "Frontend Dev", location: "Hyderabad", skills: ["React", "Vite", "Testing"] },
  { id: 6, name: "Sandeep Roy", role: "Product Designer", location: "Kolkata", skills: ["Research", "UX Writing", "Heuristics"] }
];
 
export const courses = [
  { id: "c1", title: "React Basics", category: "Frontend", level: "Beginner", rating: 4.6, durationHrs: 6 },
  { id: "c2", title: "UI Foundations", category: "Design", level: "Beginner", rating: 4.4, durationHrs: 5 },
  { id: "c3", title: "Accessibility 101", category: "Frontend", level: "Beginner", rating: 4.7, durationHrs: 4 },
  { id: "c4", title: "Advanced CSS", category: "Frontend", level: "Intermediate", rating: 4.5, durationHrs: 7 },
  { id: "c5", title: "Design Systems Intro", category: "Design", level: "Intermediate", rating: 4.3, durationHrs: 6 },
  { id: "c6", title: "Testing React", category: "Frontend", level: "Intermediate", rating: 4.2, durationHrs: 8 }
];

export const siteInfo = {
  name: "LearnLab",
  tagline: "Practice. Build. Repeat.",
  stats: { users: 1240, courses: courses.length, team: team.length },
  links: {
    github: "https://example.com/learnlab",
    docs: "https://example.com/docs"
  }
};
 
export const userProfile = {
  id: "u1001",
  name: "Atanu Paul",
  email: "atanu@example.com",
  location: "Kolkata, IN",
  avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=atanu",
  joined: "2024-06-15",
  preferences: {
    theme: "light",
    notifications: { email: true, sms: false, push: true }
  },
  badges: ["Starter", "Early Adopter"]
};