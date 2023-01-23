import express from 'express';

const PORT = 3333;
const app = express();

app.get('/', (req, res) => {
	return res.json({ message: 'Hello!' });
});

app.listen(3333, () => console.log(`listening on port ${PORT}`));
