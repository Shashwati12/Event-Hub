// Import required modules
import { randomUUID } from 'crypto';

// List of event categories with their color codes
export const eventCategories = [
  { id: "technical", name: "Technical", color: "blue" },
  { id: "cultural", name: "Cultural", color: "purple" },
  { id: "workshop", name: "Workshop", color: "amber" },
  { id: "hackathon", name: "Hackathon", color: "emerald" },
  { id: "sports", name: "Sports", color: "red" },
  { id: "lecture", name: "Guest Lecture", color: "teal" },
  { id: "fest", name: "College Fest", color: "fuchsia" },
  { id: "openmic", name: "Open Mic", color: "orange" },
];

// List of departments
export const departments = [
  "Computer Science",
  "Engineering",
  "Business",
  "Arts",
  "Science",
  "Humanities",
  "Medical"
];

// List of colleges
export const colleges = [
  "MIT",
  "Harvard",
  "Stanford",
  "IIT Delhi",
  "Oxford",
  "Cambridge",
  "Yale"
];

// List of locations
export const locations = [
  "New York",
  "London",
  "Mumbai",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Paris"
];

// Generate a random date between now and 3 months in the future
const getRandomFutureDate = () => {
  const now = new Date();
  const future = new Date();
  future.setMonth(now.getMonth() + 3);
  const randomDate = new Date(
    now.getTime() + Math.random() * (future.getTime() - now.getTime())
  );
  return randomDate.toISOString().split('T')[0];
};

// Function to format time in 12-hour format
const formatTime = (hours, minutes) => {
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
};

// Generate a random time
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, or 45
  return formatTime(hours, minutes);
};

// Generate mock event data
export const mockEvents = [
  {
    id: "1",
    title: "TechFest 2023",
    description: "Annual technology festival featuring coding competitions, hackathons, and tech talks from industry leaders.",
    date: "2023-06-15",
    time: "9:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "technical",
    categoryColor: "blue",
    department: "Computer Science",
    college: "MIT",
    location: "Boston",
    isOnline: false,
    price: 500,
    registrations: 423,
    tags: ["coding", "hackathon", "technology"]
  },
  {
    id: "2",
    title: "Cultural Night 2023",
    description: "A night of music, dance, and theatrical performances celebrating cultural diversity and artistic talent.",
    date: "2023-07-08",
    time: "6:30 PM",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    category: "cultural",
    categoryColor: "purple",
    department: "Arts",
    college: "Harvard",
    location: "Cambridge",
    isOnline: false,
    price: 200,
    registrations: 612,
    tags: ["music", "dance", "art"]
  },
  {
    id: "3",
    title: "AI Workshop Series",
    description: "Learn about the latest advancements in artificial intelligence through hands-on workshops conducted by experts.",
    date: "2023-06-22",
    time: "10:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "workshop",
    categoryColor: "amber",
    department: "Computer Science",
    college: "Stanford",
    location: "Palo Alto",
    isOnline: true,
    price: 1500,
    registrations: 289,
    tags: ["AI", "machine learning", "workshop"]
  },
  {
    id: "4",
    title: "Entrepreneurship Summit",
    description: "Connect with successful entrepreneurs, investors, and business leaders to gain insights on building startups.",
    date: "2023-08-05",
    time: "9:30 AM",
    imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    category: "lecture",
    categoryColor: "teal",
    department: "Business",
    college: "Yale",
    location: "New Haven",
    isOnline: false,
    price: 1000,
    registrations: 347,
    tags: ["business", "startup", "entrepreneurship"]
  },
  {
    id: "5",
    title: "Hack the Future",
    description: "A 48-hour hackathon where teams compete to build innovative solutions for real-world problems. Prizes worth $10,000!",
    date: "2023-07-15",
    time: "8:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "hackathon",
    categoryColor: "emerald",
    department: "Engineering",
    college: "IIT Delhi",
    location: "New Delhi",
    isOnline: false,
    price: 0,
    registrations: 564,
    tags: ["hackathon", "coding", "innovation"]
  },
  {
    id: "6",
    title: "Inter-College Sports Tournament",
    description: "Annual sports competition featuring football, basketball, cricket, and athletics with teams from top colleges.",
    date: "2023-08-20",
    time: "7:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80",
    category: "sports",
    categoryColor: "red",
    department: "Sports",
    college: "Oxford",
    location: "Oxford",
    isOnline: false,
    price: 100,
    registrations: 832,
    tags: ["sports", "tournament", "competition"]
  },
  {
    id: "7",
    title: "SpringFest 2023",
    description: "The largest college festival in the region with music performances, food stalls, competitions, and celebrity appearances.",
    date: "2023-06-30",
    time: "11:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    category: "fest",
    categoryColor: "fuchsia",
    department: "Student Affairs",
    college: "Cambridge",
    location: "Cambridge",
    isOnline: false,
    price: 300,
    registrations: 1254,
    tags: ["festival", "music", "food"]
  },
  {
    id: "8",
    title: "Poetry Open Mic Night",
    description: "Express yourself through poetry, spoken word, and storytelling in a supportive environment for all skill levels.",
    date: "2023-06-18",
    time: "7:30 PM",
    imageUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    category: "openmic",
    categoryColor: "orange",
    department: "Humanities",
    college: "Yale",
    location: "New Haven",
    isOnline: false,
    price: 50,
    registrations: 76,
    tags: ["poetry", "openmic", "literature"]
  },
  {
    id: "9",
    title: "Mobile App Development Bootcamp",
    description: "Intensive 2-day bootcamp covering React Native, Flutter, and native app development with hands-on projects.",
    date: "2023-07-01",
    time: "9:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "workshop",
    categoryColor: "amber",
    department: "Computer Science",
    college: "Stanford",
    location: "Palo Alto",
    isOnline: false,
    price: 2000,
    registrations: 134,
    tags: ["mobile", "development", "coding"]
  },
  {
    id: "10",
    title: "Quantum Computing Seminar",
    description: "Introduction to quantum computing principles, current research, and future applications by leading physicists.",
    date: "2023-08-10",
    time: "2:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "lecture",
    categoryColor: "teal",
    department: "Science",
    college: "MIT",
    location: "Boston",
    isOnline: true,
    price: 0,
    registrations: 289,
    tags: ["quantum", "computing", "physics"]
  },
  {
    id: "11",
    title: "Design Thinking Workshop",
    description: "Learn the design thinking methodology and apply it to solve real-world problems through collaborative exercises.",
    date: "2023-07-10",
    time: "10:00 AM",
    imageUrl: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "workshop",
    categoryColor: "amber",
    department: "Design",
    college: "Harvard",
    location: "Cambridge",
    isOnline: false,
    price: 800,
    registrations: 187,
    tags: ["design", "thinking", "innovation"]
  },
  {
    id: "12",
    title: "Blockchain and Cryptocurrency Panel",
    description: "Expert panel discussion on blockchain technology, cryptocurrencies, and their impact on various industries.",
    date: "2023-07-25",
    time: "4:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    category: "lecture",
    categoryColor: "teal",
    department: "Business",
    college: "IIT Delhi",
    location: "New Delhi",
    isOnline: true,
    price: 200,
    registrations: 312,
    tags: ["blockchain", "cryptocurrency", "technology"]
  }
];

// Function to generate mock events
export const generateMockEvents = (count = 5) => {
  const events = [];
  
  for (let i = 0; i < count; i++) {
    const categoryIndex = Math.floor(Math.random() * eventCategories.length);
    const category = eventCategories[categoryIndex];
    
    const departmentIndex = Math.floor(Math.random() * departments.length);
    const department = departments[departmentIndex];
    
    const collegeIndex = Math.floor(Math.random() * colleges.length);
    const college = colleges[collegeIndex];
    
    const locationIndex = Math.floor(Math.random() * locations.length);
    const location = locations[locationIndex];
    
    const event = {
      id: (mockEvents.length + i + 1).toString(),
      title: `Event ${mockEvents.length + i + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      date: getRandomFutureDate(),
      time: getRandomTime(),
      imageUrl: `https://source.unsplash.com/random/800x600/?event,${category.id}`,
      category: category.id,
      categoryColor: category.color,
      department: department,
      college: college,
      location: location,
      isOnline: Math.random() > 0.7,
      price: Math.floor(Math.random() * 2000),
      registrations: Math.floor(Math.random() * 1000),
      tags: [category.id, department.toLowerCase(), "event"]
    };
    
    events.push(event);
  }
  
  return [...mockEvents, ...events];
};