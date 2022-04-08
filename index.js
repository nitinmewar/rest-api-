import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';

const app = express();
const PORT = 1397;

app.use(bodyParser.json());

app.use('/users', userRoutes);



app.get('/', (req,res) => res.send("welcome to my server"));

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))

