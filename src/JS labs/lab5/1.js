const personals = [
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
];

const personal = {};

for (let i = 0; i < personals.length; i++) {
    const name = personals[i];
    const personalNum = name.length; 
    personal[name] = personalNum; 
}

for (const [employeeName, personalNum] of Object.entries(personal)) {
    console.log(`Name: ${employeeName} - Personal Number: ${personalNum}`);
}

