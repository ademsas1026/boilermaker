//1. create app with express
const express = require('express');
const app = express();

//for database syncing
const db = require('./db/index.js')

//2. set up logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

//3. set up static middleware
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')))

//4. set up body parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//5. set up API routes -- the line below matches all requests to /api
app.use('/api', require('./apiRoutes'))

//6 - 7 see  server/apiRoutes/index.js

//8. send index HTML for any requests that don't match one of the defined API routes
//why do we do this? because we're generally building SPAs
//must be after ALL routes in server entry file!
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//9. handle 500 errors
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

//10. start the server
const port = process.env.PORT || 3000;
db.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`it's your server, listening in on port ${port}`);
        })
    })
