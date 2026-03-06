const User = require('../model/userModel')

// this is a simple Read function
// GET /api/users

const getAllUsers = async (req, res) => {
  try {
    // .select("-password") hides the password field from results
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET /api/users/:id — Get one user by ID
// this is also a read function

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /api/users/:id — Update a user
// this is an update function

const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { fullName },  // fields to update
      { new: true }         // return the updated document
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE /api/users/:id — Delete a user
// this is a delete function

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };