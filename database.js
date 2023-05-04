//imports
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const booksCollection = require('./bookCollection');

//Database constants
const dbConnection = require('./routes/connection')
dbConnection();

//server
const port = 8000;
app.listen(port, async()=>{
    console.log(`Server started on port ${port}`);
});

//view engine initialization
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname)));
//routes

const indexRouter = require('./routes/index.js');
const signInRouter = require('./routes/signIn.js');
const forgotPasswordRouter = require('./routes/forgotPassword.js');
const getBooksRouter = require('./routes/getBooks');
const searchRouter = require('./routes/search');
const resourcesRouter = require('./routes/resources');
const servicesRouter = require('./routes/services');
const eventsRouter = require('./routes/events');
const universityRepoRouter = require('./routes/universityRepo');
const tableRouter = require('./routes/table')

app.get('/', indexRouter);
app.get('/signIn', signInRouter);
app.post('/signIn', signInRouter);
app.get('/forgotPassword', forgotPasswordRouter);
app.post('/forgotPassword', forgotPasswordRouter);
app.get('/getBooks', getBooksRouter);
app.get('/search/title', searchRouter);
app.get('/resources', resourcesRouter);
app.get('/services', servicesRouter);
app.get('/events', eventsRouter);
app.get('/universityRepos', universityRepoRouter);
app.get('/tables', tableRouter)
app.post('/tables/delete/:id', tableRouter)
app.post('/tables/update/:id',tableRouter)
app.post('/tables/send',tableRouter)