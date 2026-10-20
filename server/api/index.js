const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    "http://localhost:5173",
    "https://callumflannagan-client.vercel.app"
];

// Middleware
app.use(cors({
    origin: allowedOrigins
}));



app.use(express.json());
//app.use(express.json({ limit: "10kb" })); //use this later to limit request sizes if needed (if I allow posts)
app.use(express.urlencoded({ extended: true }));

// Serve React public and source files during development
app.use(express.static(path.join(__dirname, "../myapp/public")));
app.use(express.static(path.join(__dirname, "../myapp/src")));

// Homepage / API status
app.get("/", (req, res) => {
    res.send("Portfolio API is running!");
});

// Return project data from projects.json
app.get("/api/projects", async (req, res, next) => {
    try {
        const filePath = path.join(__dirname, "projects.json");
        const data = await fs.promises.readFile(filePath, "utf8");
        const projects = JSON.parse(data);

        res.json(projects);
    } catch (error) {
        next(error);
    }
});

//add later if functionality to login and add project
// app.post("/projects", (req, res) => {
//     const project = req.body;

//     console.log(project.title);    // "My New Game"
//     console.log(project.category); // "Games"

//     res.json({ message: "Project received" });
// });


//Enable later when I make contact form
// app.post("/contact", (req, res) => {
//     const { name, message } = req.body;

//     res.json({
//         received: true,
//         name,
//         message
//     });
// });

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Central error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        error: "Internal server error"
    });
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

module.exports = app;