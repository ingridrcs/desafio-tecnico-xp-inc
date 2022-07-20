import app from './app';


const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});