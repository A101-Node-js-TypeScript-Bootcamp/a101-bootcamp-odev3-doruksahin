const { User } = require("../models/user")
const bcrypt = require("bcrypt")

//req.params ile /:id alinabilir.
//req.query ile query params alinabilir.
//req.body ile body alinabilir.


async function signup(userObj) {
    try {
        const sameUsernameUser = await User.findOne({ username: userObj.username });
        if (sameUsernameUser) {
            throw new Error("Username exists! Enter another username.");
        }
        const user = new User(userObj);

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        user.password = await bcrypt.hash(user.password, salt);
        user.save();

        return "user created!";
    } catch (error) {
        console.log(error);
        throw new Error("An error occured");
    }
}

// returns token which is reachable with response.token
async function signin(userObj) {
    try {
        const user = await User.findOne({ username: userObj.username });
        if (!user) throw new Error("User not found");

        const validPassword = await bcrypt.compare(
            userObj.password,
            user.password
        );

        if (!validPassword)
            throw new Error("Invalid password");

        const token = user.generateAuthToken();
        const data = {}
        data.token = token
        data.user = user
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("An error occured");
    }
}

async function getAllUsers() {
    return await User.find({}).populate("auctions")
}


async function updateUser(myUser, newPassword) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    myUser.password = await bcrypt.hash(newPassword, salt);
    myUser.save()
    return "Password updated.";
}


async function deleteUser(myUser) {
    myUser.delete()
    return "User deleted."
}


async function getUser(myUser) {
    return myUser;
}



async function addCredit(myUser) {
    myUser.credit += req.body.credit
    myUser.save()
    return `${req.body.credit} credit(s) added.`
}


module.exports = {
    createUser,
    signin,
    deleteUser,
    updateUser,
    getAllUsers,
    getUser,
    addCredit
}

