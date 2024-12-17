const User = require("../models/user")

async function handleCreateUser(req, res) {
    const body = req.body
    validation(body)

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        ipAddress: body.ip_address,
    })


    return res.status(201).json({ msg: "Success", id: result.id })
}

async function handleGetAllUsers(req, res) {
    const allUsers = await User.find({})
    return res.json(allUsers)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
}
async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ipAddress: req.body.ip_address,
    })
    return res.json({ status: "Success", user: req.body })
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
}



function validation(body) {
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.ip_address) {
        return res.json({ msg: "All fields are req...." })
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById
}