const connectToMongoDb = require('./config/db');
connectToMongoDb();
const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const studentRoutes = require('./routes/student.routes');
const paiementRoutes = require('./routes/paiement.routes');
const fraisRoutes = require('./routes/frais.routes');

require('dotenv').config({ path: '.env' });
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/paiement', paiementRoutes);
app.use('/api/frais', fraisRoutes);

app.listen(PORT, () => {
  console.log(`app is running at the port : ${PORT}`);
});
