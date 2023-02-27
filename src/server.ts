import express from 'express';

const app = express();

app.get('/a', (req, res) => {
	return res.json({ message: 'tudo funcionando 🚀🚀🚀' });
});

app.listen(8080, () => console.log('listening on port 8080'));
