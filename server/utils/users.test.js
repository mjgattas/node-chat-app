const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }];``
  });

  it('should add new user', () => {
    var users = new Users();
    var testUser = {
      id: '123',
      name: 'Andrew',
      room: 'TheOfficeFans'
    };

    var res = users.addUser(testUser.id, testUser.name, testUser.room);
    expect(users.users).toEqual([testUser]);

  });

  it('should returns names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should returns names for node course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var testUser = users.users[0];
    var testId = testUser.id;

    removedUser = users.removeUser(testId);

    expect(removedUser).toEqual(testUser);
    expect(users.users).not.toContainEqual(testUser);
  });

  it('should not remove a user', () => {
    var testId = '145';

    removedUser = users.removeUser(testId);

    expect(removedUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var testUser = users.users[0];
    var testId = testUser.id;

    gottenUser = users.getUser(testId);

    expect(gottenUser).toMatchObject(testUser);
  });

  it('should not find user', () => {
    var testUser = {
      id: '123',
      name: 'Whatevers',
      room: 'Nope'
    }
    var testId = testUser.id;

    gottenUser = users.getUser(testId);

    expect(gottenUser).toBeFalsy();
  });

});
