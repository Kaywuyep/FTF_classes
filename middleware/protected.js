// ========================
// middleware/authMiddleware.js
// ========================
// Middleware runs BETWEEN the route and the controller.
// This one checks if the user has a valid token before accessing protected routes.

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET; // Must match the one in authController

const protect = (req, res, next) => {
  // 1. Get the token from the request headers
  // Clients send it as:  Authorization: Bearer <token>
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided. Please log in." });
  }

  // 2. Extract just the token part (remove "Bearer ")
  const token = authHeader.split(" ")[1];

  try {
    // 3. Verify the token is valid and not expired
    const decoded = jwt.verify(token, JWT_SECRET);

    // 4. Attach the user info to the request so the next function can use it
    req.user = decoded;

    // 5. Call next() to move on to the controller
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = { protect };
