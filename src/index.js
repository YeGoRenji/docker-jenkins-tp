const port = 3210;
const app = require('express')();

app.get('/', (req, res ) =>
    res.json({ message: 'Hello Docker !' })
);


app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
