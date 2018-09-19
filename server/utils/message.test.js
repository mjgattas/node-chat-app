var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should genereate correct location message object', () => {
    var testbody = {
      from: 'Janatha',
      latitude: 100,
      longitude: 100
    };

    var locationMessage = generateLocationMessage(testbody.from, testbody.latitude, testbody.longitude);
    var expectedUrl = `https://www.google.com/maps?q=${testbody.latitude},${testbody.longitude}`;

    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage).toMatchObject({from: testbody.from, url: expectedUrl});
  });
});
