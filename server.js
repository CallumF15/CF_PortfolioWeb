const express = require("express");
const cors = require('cors');

//PORT - when deployed can't be 3000
const PORT = process.env.PORT || 5000

const app = express();
 app.use(cors());

app.get("/tasks", (req, res) => {
  const tasks = [
    {
      id: 1,
      name: 'Super Hero Game',
      desc: "The game concept was simple, play as a super hero soaring through the sky whilst in the persuit of an evil villain who is relentlessly targetting you whilst you collect coins and power-ups to aid you in your battle.",
      link: "../SuperHeroGame/game.html",
      bg: "Initially the LeapMotion technology was used to enable hand gesture recognition to manipulate the character’s movement to fly at an angle that's based on the pitch of your hand.  The idea of a kid playing with his superman-like action figure by grasping the figures legs and pretending he was soaring through the sky spawned the idea for how the control scheme for the game would work. The project has been updated to be used within a browser using a mouse to manipulate movement.",
    },
    {
      id: 2,
      name: 'Procedural Content Generation',
      desc: "Collecting user data to adjust and alter the algorithm ",
      link: "../Game2/game.html",
      bg: "",
      bglink: "",
      bgname: ""
    },
    {
      id: 3,
      name: 'Mobile Platformer',
      desc: "An endless jumping platformer where you ",
      link: "../Game3/game.html",
      bg: "",
      bglink: "",
      bgname: ""
    }
  ];
  res.json(tasks);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
