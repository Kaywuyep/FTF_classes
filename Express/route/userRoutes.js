const express = require("express");
const router  = express.Router();
const userController = require("../controller/userController");
const { protect } = require("../middleware/protected");

router.get("/",          protect, userController.getAllUsers);   // GET    /api/users
router.get("/:id",       protect, userController.getUserById);   // GET    /api/users/:id
router.put("/:id",       protect, userController.updateUser);    // PUT    /api/users/:id
router.delete("/:id",    protect, userController.deleteUser);    // DELETE /api/users/:id

module.exports = router;
