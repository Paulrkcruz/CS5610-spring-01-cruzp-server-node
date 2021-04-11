module.exports = (app) => {

    app.get('/', function (req, res) {
        res.send('Hello World')
    })

// const add = (rq, rs) => {
//     const a = rq.params['paramA']
//     const b = rq.params['paramB']
//     rs.send(a+b);
// }

    const add = (rq, rs) => {
        const a = parseInt(rq.params['paramA']);
        const b = parseInt(rq.params['paramB']);
        rs.send(`${a+b}`);
    }

    app.get('/add/:paramA/:paramB', add)

// http://localhost:3000/substract?x=7&y=3
    const substract = (rq, rs) => {
        const x = parseInt(rq.query['x']);
        const y = parseInt(rq.query['y']);
        const z = x - y;
        rs.send(`${z}`);
    }

    app.get('/substract', substract)

}

