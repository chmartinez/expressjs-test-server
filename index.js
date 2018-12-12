const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return 'Test';
});

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

