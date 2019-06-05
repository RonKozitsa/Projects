const crypto = require("crypto");
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
let M = 0;
let id;
let id_maps = {};
const VALID_PUT_OPS = ['divide', 'multiply'];
const VALID_POST_OPS = ['add', 'sub'];
const METHODS = {
    POST: 'POST',
    PUT: 'PUT',
    GET: 'GET',
    DELETE: 'DELETE'
};

function uuid(size = 16) {
    return crypto.randomBytes(16).toString("hex");
}

app.get('/start', function (req, res) {
    id = uuid();
    id_maps[id] = 0;
    res.send(JSON.stringify({
        id,
        m: 0
    }));
});

app.use('/calc/:uniqustring', function (req, res, next) {
    const id = req.params.uniqustring;
    const valid = validateId(id);
    if (!valid) {
        send404(res, id);
    }
    else {
        next();
    }
});

app.use('/calc/:uniqustring/:op/:num', function (req, res, next) {
    const internalError = checkForErrors(req.params.op, req.params.num, req.params.uniqustring, req.method);
    if (internalError) {
        res.status(500).send(internalError);
        res.end();
    } else {
        next();
    }
});

app.post('/calc/:uniqustring/add/:num', function (req, res) {
    const m = id_maps[req.params.uniqustring] + parseInt(req.params.num);
    sendResponseToClient(req.params.uniqustring, m, res);
    id_maps[req.params.uniqustring] += Number(req.params.num);
});

app.post('/calc/:uniqustring/sub/:num', function (req, res) {
    const m = id_maps[req.params.uniqustring] - parseInt(req.params.num);
    sendResponseToClient(req.params.uniqustring, m, res);
    id_maps[req.params.uniqustring] -= Number(req.params.num);
});

app.put('/calc/:uniqustring/multiply/:num', function (req, res) {
    const m = id_maps[req.params.uniqustring] * parseInt(req.params.num);
    sendResponseToClient(req.params.uniqustring, m, res);
    id_maps[req.params.uniqustring] *= Number(req.params.num);
});

app.put('/calc/:uniqustring/divide/:num', function (req, res) {
    const m = id_maps[req.params.uniqustring] / parseInt(req.params.num);
    sendResponseToClient(req.params.uniqustring, m, res);
    id_maps[req.params.uniqustring] /= Number(req.params.num);
});

app.get('/calc/:uniqustring/M', function (req, res) {
    sendResponseToClient(null, id_maps[req.params.uniqustring], res);
});

app.post('/calc/:uniqustring/reset', function (req, res) {
    sendResponseToClient(req.params.uniqustring, 0, res);
    id_maps[req.params.uniqustring] = 0;
});

app.delete('/calc/:uniqustring/del', function (req, res) {
    delete id_maps[req.params.uniqustring];
    const message = JSON.stringify({
        message:`Session deleted`
    });
    res.send(message);
});


function sendResponseToClient(id = null, m, res){
    const response =  id? 
    JSON.stringify({
        id,
        m
    }) : 
    JSON.stringify({
        m
    });

    res.send(response);
}


function validateId(id) {
    return id in id_maps;
}

function checkForErrors(op, num, id, method) {
    if (method === METHODS.POST && !VALID_POST_OPS.includes(op)) {
        return JSON.stringify({
            error: `POST method does not support the operation: ${op}. Please provide a valid arithmetic operation: ${VALID_POST_OPS} `
        });
    } else if (method === METHODS.PUT && !VALID_PUT_OPS.includes(op)) {
        return JSON.stringify({
            error: `PUT method does not support the operation: ${op}. Please provide a valid arithmetic operation: ${VALID_PUT_OPS} `
        });
    }
    else if (Number.isNaN(Number(num))) {
        return JSON.stringify({
            error: `Please provide a valid number, ${num} is not a valid number`
        });
    } else if (op === 'divide' && Number(num) === 0) {
        return JSON.stringify({
            error: `Cannot divide by zero !`
        });
    }

    return undefined;
}

function send404(res, id) {
    const err = JSON.stringify({
        error: `Unique string - ${id} not found`
    });
    res.status(404).send(err);
    res.end();
}

function send500(res, err) {
    res.status(500).send(err);
    res.end();
}

app.listen(PORT);

console.log(`Listening on port : ${PORT}`);

module.exports = {
    PORT: PORT,
    METHODS: METHODS
}