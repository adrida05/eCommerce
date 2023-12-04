// import other routes
const userRoutes = require('./suppliers');


const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Bienvenido a eCommerce api-server');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;