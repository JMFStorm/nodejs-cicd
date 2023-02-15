const express = require('express');
var path = require('path');

const app = express()
const port = 3000

app.use(express.json({ limit: "10mb" }));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
    return;
})

// Get a text file
app.get('/file', function (req, res, next) {
    var filesDir = path.join(__dirname, 'files')
    res.download('text.txt', { root: filesDir }, function (err) {
        if (err) {
            res.status(500);
            res.send('An error occured, sorry!');
            return;
        }
    });
});

// Get pokemon of the day, API versioning in header
app.get('/pokemon-of-the-day', function (req, res, next) {
    const version = req.get('Version');
    if (version == 1) {
        res.send({ name: "bulbasaur" });
        return;

    } else if (version == 2) {
        res.send({ name: "bulbasaur", type: "grass" });
        return;
    } else {
        res.status(500);
        res.send('Invalid version header.');
        return;
    }
});

// Login user, recieve authorization token
app.post('/login', function (req, res, next) {
    if (req.body?.password != "salasana") {
        res.status(400);
        res.send('Login failed.');
        return;
    }
    res.send({ token: '11223344556677889900' });
    return;
});

// Use bearer token in header to get nuclear launch codes
app.get('/secret', function (req, res, next) {
    const auth = req.get('authorization');
    if (!auth) {
        res.status(400);
        res.send('Authorization token missing.');
        return;
    }
    const splitToken = auth.split(" ");
    if (splitToken.length !== 2 || splitToken[0] !== "Bearer") {
        res.status(400);
        res.send('Authorization token error.');
        return;
    }
    const token = splitToken[1];
    if (token != "11223344556677889900") {
        res.status(400);
        res.send('Authorization failed.');
        return;
    }
    res.send({ nuclearLaunchCodes: 'YuY!wqO19¤1tO03&%3341ial->><rtEo' });
    return;
});

// Run server
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})