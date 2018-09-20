var users = [{
  id: 'asdfkgdfnmvcxkjfiewojflskdjlf',
  name: 'Andrew',
  room: 'TheOfficeFans'
}];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var removedUser = null;
    var excludingId = this.users.filter((user) => {
      if (user.id === id) {
        removedUser = user;
        return false;
      } else {
        return true;
      };
    });
    this.users = excludingId;
    return removedUser;
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}


module.exports = { Users };
