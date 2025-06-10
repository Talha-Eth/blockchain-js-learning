let name = "Talha";
let points = 120;

function CheckLevel(_name, _points) {
    let level = _points > 500 ? "Pro"
                : _points >= 100 ? "Intermediate"
                : _points >= 0 ? "Beginner"
                : "Error: Incorrect Value";
                console.log(`${_name} is a ${level}`);
}

CheckLevel("Talha", -120);
// -------------------------------------------Challenge 2----------------------------------------------------- //
let Name = "Talha Moin";
const DOB = 2007;
let currentYear = 2025;

let MyAge = currentYear - DOB;
let skills = ["Solidity", "Truffle", "JavaScript"];

console.log(`Hi, my name is ${Name}. I am ${MyAge} years old and learning ${skills[0]}, ${skills[1]}, and ${skills[2]}.`);

skills.push("Web3.js");

function SkillTracker(name, skill) {
    console.log(`${name} is learning the following skills:`);
    for (let skill of skills) {
        console.log(` - ${skill}`);
    }
}

SkillTracker("Talha", skills);
// -----------------------------------------Challenge 3------------------------------------------------------------- //

function checkScores(_name, score) {
    for (let thisscore of score) {
        let result = thisscore >= 50 ? "Passed" : "Failed";
        console.log(`${_name} - Score: ${thisscore} ${result}`);
    }
}

checkScores("Talha", [80, 45, 60]);
// -----------------------------------------Challenge 4---------------------------------------------------------------//

function addSkillIFnew(_skills, newskill) {
    let IsNew = true;
    for (let thisskill of _skills) {
        if (newskill == thisskill) {
            IsNew = false;
            console.log("Skill already exists!");
            break;
        }
    }
    if (IsNew == true) {
        _skills.push(newskill);
        console.log(`New Skill Added: ${newskill}`);
    }
}

addSkillIFnew(skills, "React.js");




let textt = "Skills: "
function formatskills(_skill) {
    for (let thisskill of _skill) {
        textt = textt + " " + thisskill + ",";
    }
    
}
formatskills(skills);
console.log(textt);