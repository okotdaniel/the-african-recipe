const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//ejs middle wares 
app.use(expressLayouts);
app.set('view engine', 'ejs');
//routes 
app.use("/static", express.static(__dirname + "/static"));
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));


//port configurations 
const PORT = process.env.PORT || 5000 ;
app.listen (PORT, console.log(`process started on port ${PORT}`));