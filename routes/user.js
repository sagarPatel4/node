const express = require("express")
const {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleDeleteUserById,
    handleUpdateUserById
} = require("../controllers/user")

const router = express.Router()

router
    .route("/")
    .post(handleCreateUser)
    .get(handleGetAllUsers)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router