var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var testbody = {
      from: 'Janatha',
      text: 'Wanna go eat lunch, if ya know what i mean??'
    };
    var message = generateMessage(testbody.from, testbody.text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject(testbody);
  });

});
