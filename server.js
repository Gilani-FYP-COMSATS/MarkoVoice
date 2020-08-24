const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/configurations', require('./routes/api/configurations'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/scripts', require('./routes/api/scripts'));
app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/profile', require('./routes/api/scripts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`** Server started on port ${PORT} **`));
