var cors = require('cors')

const supplierRoutes = (app, fs) => {

   
    app.use(cors())
    // variables
    const dataPath = 'bd.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/api/user', cors(), (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send({"user": JSON.parse(data).user});
        });
    });

// READ
app.get('/api/version', cors(), (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send({"version":JSON.parse(data).version});
    });
});

    // READ
    app.get('/api/suppliers', cors(), (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data).data);
        });
    });

    // CREATE
    app.post('/api/suppliers', cors(), (req, res) => {

        readFile(data => {
            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value
            const newsupplierId = Date.now().toString();

            // add the new supplier
            data[newsupplierId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new supplier added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/api/suppliers/:id', cors(), (req, res) => {

        readFile(data => {

            // add the new supplier
            const supplierId = req.params["id"];
            data[supplierId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`suppliers id:${supplierId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/api/suppliers/:id', cors(), (req, res) => {

        readFile(data => {

            // delete the supplier
            const supplierId = req.params["id"];
            delete data[supplierId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`suppliers id:${supplierId} removed`);
            });
        },
            true);
    });
};

module.exports = supplierRoutes;