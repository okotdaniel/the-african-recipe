const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//ejs middle wares 
app.use(expressLayouts);
app.set('view engine', 'ejs');
//routes 
app.use("/static", express.static(__dirname + "/static"));
app.use("/static/css", express.static(__dirname + "/static/css"));
app.use('/', require('./routes/index'));
app.use('/usersRouter', require('./routes/usersRouter'));


//port configurations 
const PORT = process.env.PORT || 5000 ;
app.listen (PORT, console.log(`process started on port ${PORT}`));