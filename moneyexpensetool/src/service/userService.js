import http from "./httpService";

const serverRoute = "/api/User/";


const UserService = {

  async addUser(newUser) {
    debugger
    return await http.post(serverRoute + "addUser", newUser);
  },

  async getUserById(id) {
    return await http.get(serverRoute + `getUserById/${id}`);
  },

  async UpdateUser(newUser) {
    debugger
    return await http.post(serverRoute + "updateUser", newUser);
  },

}

export default UserService;