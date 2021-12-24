const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000 || process.env.PORT;

const indexRoutes = require('./routes/index');
const coursesRoutes = require('./routes/courses');
const instructorRoutes = require('./routes/instructor');
const participantRoutes = require('./routes/participant');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

app.use(indexRoutes);
app.use(instructorRoutes);
app.use(coursesRoutes);
app.use(participantRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(port, () =>
      console.log(`Server listening on http://localhost:${port}`)
    )
  );
