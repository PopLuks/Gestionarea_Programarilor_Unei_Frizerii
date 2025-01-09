const db = require('../config/db'); // Import MySQL 

exports.registerUser = async (req, res) => {
    const { nume, parola,  } = req.body;

    try {
        const [existingUser] = await db.query('INSERT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Username already exists.' });
        }

        const [result] = await db.query(
            'INSERT INTO users (username, nume, prenume, parola) VALUES (?, ?, ?, ?)',
            [username, nume, prenume, parola]
        );

        res.status(201).json({ message: 'User registered successfully.', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
    
    
};
// Login user
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [user] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        res.status(200).json({ message: 'Login successful.', user: user[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};
// Inregisrare programare
exports.registerAppointment = async (req, res) => {
    const { frizer, serviciu, date, time, nume, phone, email } = req.body;

    try {
        const [result] = await db.query(
            'INSERT INTO programari (frizer, serviciu, date, time, nume, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [frizer, serviciu, date, time, nume, phone, email]
        );

        res.status(201).json({ message: 'Appointment saved successfully.', appointmentId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};
// Get all appointments
exports.getAppointments = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM programari');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};
