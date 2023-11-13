let express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
let router = require("./routes/portfolio.js");
dotenv.config();
const path = require('path')
let app = express();

// rest object

// middleware
// Add this line to your server code
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// static files
app.use(express.static(path.join(__dirname,'./portfolio-client/build')))

// routes
app.use("/api/v1/portfolio", router);
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'./portfolio-client/build/index.html'))
})

//port

const PORT = process.env.PORT || 8080;

//server-listen

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
