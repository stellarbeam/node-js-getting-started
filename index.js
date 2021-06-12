const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/:name', (req, res) {
      var name = req.params.name;
      console.log(JSON.stringify(req.headers));
      res.redirect(`https://touch-msg.com/in/f-ipd?f=${name}`)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
