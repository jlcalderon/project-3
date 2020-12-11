// Requiring our models and passport as we've configured it
const db = require("./models");

//Arrays of seeds data
const schoolSeeds = [{
        name: "A.C.G.C. Public School District",
        city: "Grove City",
        state: "Minnesota",
        district: "2396-01",
        phone: "(320) 244-4712"
    },
    {
        name: "Academia Cesar Chavez Charter School",
        city: "Minnehaha",
        state: "Minnesota",
        district: "4073-07",
        phone: "(651) 778-2940"
    },
    {
        name: "Badger Public School District",
        city: "Roseau - 68",
        state: "Minnesota",
        district: "0676-01",
        phone: "(218) 528-3201"
    },
    {
        name: "Bloomington Public School District",
        city: "Bloomington",
        state: "Minnesota",
        district: "0271-01",
        phone: "(952) 681-6400"
    },
    {
        name: "El Colegio Charter School",
        city: "Minneapolis",
        state: "Minnesota",
        district: "4057-07",
        phone: "(612) 728-5728"
    },
    {
        name: "Minneapolis Public School District",
        city: "Minneapolis",
        state: "Minnesota",
        district: "0001-03",
        phone: "(612) 668-0200"
    },
    {
        name: "Shakopee Public School District",
        city: "Shakopee",
        state: "Minnesota",
        district: "0720-01",
        phone: "(952) 496-5002"
    },
    {
        name: "Southwest Metro Intermediate 288",
        city: "Saint Paul",
        state: "Minnesota",
        district: "0288-06",
        phone: "(952) 567-8102"
    },
    {
        name: "St. Paul City School",
        city: "Saint Paul",
        state: "Minnesota",
        district: "4029-07",
        phone: "(651) 225-9177"
    },
    {
        name: "St. Paul Public School District",
        city: "Saint Paul",
        state: "Minnesota",
        district: "0625-01",
        phone: "(651) 767-8152"
    },
    {
        name: "St. Paul School of Northern Lights",
        city: "Saint Paul",
        state: "Minnesota",
        district: "4275-07",
        phone: "(612) 865-9582"
    }
];

//Bulk insert 
function seedDB() {
    for (let i = 0; i < schoolSeeds.length; i++) {
        insertRecord(schoolSeeds[i]);
        if (i >= schoolSeeds.length) {
            process.exit();
        }
    }

}

function insertRecord(schoolObj) {
    db.school.create({
        name: schoolObj.name,
        city: schoolObj.city,
        state: schoolObj.state,
        district: schoolObj.district,
        phone: schoolObj.phone,
    });
}


seedDB();