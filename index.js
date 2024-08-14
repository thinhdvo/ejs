import express from "express";
const app = express();
const port = 3000;


const d = new Date("August 17, 2024");
let day = d.getDay();
let type = "a weekday";
let adv = "it's time to work hard!";

if (day === 0 || day === 6) {
    type = "the weekend"
    adv = "let have some fun!"
};

app.get("/", (req, res) => {
    console.log(day);
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});