
const User = require("../models/user")
class UserController {
    async getUserById(id) {
        return await User.findOne({_id:id})
    }

    async addUser(newUser) {

        const newUserMongo = new User({
            name: newUser.name,
            currentBalance: newUser.currentBalance,
            dayOfTracking: newUser.dayOfTracking,
            startDate:newUser.startDate,
            expireDate:newUser.expireDate
        })

        await newUserMongo.save()
        return newUserMongo;
    }

    async UpdateUser(newUser) {
        console.log(newUser);
        const updateUser=await User.findByIdAndUpdate("62114325301333f10ad0d766",{$set:newUser})
        return updateUser;
    }

}

module.exports = new UserController();