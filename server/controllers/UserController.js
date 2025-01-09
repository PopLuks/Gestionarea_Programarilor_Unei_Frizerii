const db = require('../config/db'); 


// Inregsitrez user nou
exports.registerUser = async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        const [existingUser] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Username already exists.' });
        }

        const [result] = await db.query(
            'INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)',
            [username, email, phone, password]
        );

        res.status(201).json({ message: 'User registered successfully.', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};

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
}
