const express = require("express");
const { createUser, loginUser, getoneUser, getallUser, deleteaUser, updateaUser } = require("../controller/userCtrl");
const router = express.Router();


router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/allUsers', getallUser)
router.get('/oneUser/:id', getoneUser)
router.delete('/delete/:id', deleteaUser)
router.put('/update/:id', updateaUser)

module.exports = router