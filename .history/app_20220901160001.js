const express = require("express");

const app = express();

//
app.use(express.json());

//http

// get- fetch the data
//post- pass the data
//delete- delete the data
// put/patch - updating the data

//routes

app.get("/", (req, res) => {
  res.send("hello ksit students");
});

const students = ["prajwal", "ashish", "vishal"];

app.get("/student/:student", (req, res) => {
  const student = req.params.student;

  const allow = students.includes(student);

  if (allow) {
    // if it is true
    //empty data 0  ''  undefined nAN  THEN ALL THESE BECMOME FALSE

    res.send(`hELLO Student ${student}`);
  } else {
    res.send(`hELLO Student ${student}  you are no allowed`);
  }
});

//
app.get("/score/:score", (req, res) => {
  // localhost:5000/score/455
  const score = req.params.score;

  const no = isNaN(score);

  if (no) {
    res.send("Please enter a valid number");

    return;
  }

  const percentage = (score * 100) / 1000; ///

  res.status(200).send(`perceentage is ${percentage}`);
});

app.post("/newstudent", (req, res) => {
  const { city } = req.body;

  if (!city) {
    res.send("City is Required ");

    return;
  }

  //  name rollno city ....

  res.send(req.body);
});
// connection
app.listen(5000, () => {
  console.log("server is started at port 5000");
});
