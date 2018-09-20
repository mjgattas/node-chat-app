const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', ()=> {
    testString = 124;
    testResult = isRealString(testString);

    expect(testResult).toBe(false);
  });

  it('should reject strings with only spaces', ()=> {
    testString = '     ';
    testResult = isRealString(testString);

    expect(testResult).toBe(false);
  });

  it('should allow string with non-space characters', ()=> {
    testString = ' asdf   ';
    testResult = isRealString(testString);

    expect(testResult).toBe(true);
  });

});
