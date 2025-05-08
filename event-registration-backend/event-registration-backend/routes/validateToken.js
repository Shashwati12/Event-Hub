const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/validateToken', (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(400).json({ isValid: false });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ isValid: true, user: decoded });
  } catch {
    return res.status(401).json({ isValid: false });
  }
});

module.exports = router;
