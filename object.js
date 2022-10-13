const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };
  
  let mostSkillUser;
  let previousSkill = 0;
  const loggedInUsers = [];
  const point = [];
  const mernStackers = [];
  let  MERN = ["MongoDB", "Express", "React", "Node"];
  for (let i in users) {
    const skills = users[i].skills;
    const isLoggedIn = users[i].isLoggedIn;
    const points = users[i].points;
    if (skills.length > previousSkill) {
      previousSkill = skills.length;
      mostSkillUser = i;
    }
  
    // previousSkill= Math.max(skills.length,previousSkill);
  
    if (isLoggedIn == true) {
      loggedInUsers.push(i);
    }
  
    if (points >= 50) {
      point.push(i);
    }
  
      if (
        skills.includes(MERN[0]) &&
        skills.includes(MERN[1]) &&
        skills.includes(MERN[2]) &&
        skills.includes(MERN[3])
      ) {
        mernStackers.push(i);
    }
  }
  console.log("This is the most skilled User " + " " + mostSkillUser);
  console.log("logged in Users " + " " + loggedInUsers.length);
  console.log("the heighest point" + " " + point.length);
  console.log("Fullstack " + " " + mernStackers);
  
  // to get the keys of the object 
  const keys = []
  for (i in users ) {
    keys.push(i);
  }
//Second Method 

const objectKeys = Object.keys(users);
console.log(keys);

//to get all keys and values 

// const keyz = [];
// const values = [];
// for (let i in users){
//     keyz.push(i)
// }

// for (let i in users){
//     keyz.push(i);
//     keyz.push(users[i]);
// }
// console.log(keyz)
// console.log(values);

const array = [];
const keyz = [];
const values = [];

for (let i in users ) {
    keys.push(i);
    values.push(users)
}