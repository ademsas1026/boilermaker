// setting up express server, cont'd from server/index.js
// 6. create a router instance
const router = require('express').Router();
//remember, every request that comes here is already mounted on /api
// treat this file as a table of contents
// routes here, below

// routes here, above


//7. handle 404s -- if a user requests an API route that doesn't exist
router.use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
})
module.exports = router;

//small change