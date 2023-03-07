const express = require("express");
const {
  createUser,
  loginUser,
  getoneUser,
  getallUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/allUsers", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/oneUser/:id", authMiddleware, isAdmin, getoneUser);
router.delete("/delete/:id", deleteaUser);
router.put("/update/:id", authMiddleware, updateaUser);
router.put("/blockUser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblockUser/:id", authMiddleware, isAdmin, unblockUser);
module.exports = router;
