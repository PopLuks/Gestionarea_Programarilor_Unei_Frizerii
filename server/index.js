const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const userRoutes = require('./routes/UserRoutes');
const servicesRoutes = require('./routes/ServicesRoutes');
const db=require('./config/db');

require('dotenv').config();

const app = express();
//
app.use(cors());
app.use(bodyParser.json());
//
app.use('/api', userRoutes);
app.use('/services/', servicesRoutes);

cron.schedule('0 * * * *', async () => { // Ruleaza la fiecare ora
    try {
        //Selectarea randurilor care urmeaza sa fie sterse
        const [rows] = await db.query(`
            SELECT * FROM programari 
            WHERE date < CURDATE() 
            OR (date = CURDATE() AND STR_TO_DATE(time, '%H:%i') < CURTIME());
        `);
        console.log('Rows to be deleted:', rows);

        // Se sterg randuriel selectate
        const [result] = await db.query(`
            DELETE FROM programari 
            WHERE date < CURDATE() 
            OR (date = CURDATE() AND STR_TO_DATE(time, '%H:%i') < CURTIME());
        `);
        console.log(`Deleted ${result.affectedRows} old appointments`);
    } catch (error) {
        console.error('Error deleting old appointments:', error);
    }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

