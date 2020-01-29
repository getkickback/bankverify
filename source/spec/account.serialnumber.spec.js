import Account from '../lib/account.js';

describe('Account - Serial number', () => {
  let account;

  beforeEach(() => {
    account = Object.create(Account);
  });

  it('should return the serial number length', () => {
    account.init('11000000007').serialNumberLength().should.eql({ min: 7, max: 7 });
    account.init('8000-2-0000000000').serialNumberLength().should.eql({ min: 10, max: 10 });
    account.init('6000-000000000').serialNumberLength().should.eql({ min: 8, max: 9 });
  });

  it('should include the 5th digit for Swedbank if it is not checksum of clearing', () => {
    account.init('832459938517860').serialNumber().should.eql('9938517860');
    account.init('83271042924507').serialNumber().should.eql('1042924507');
  });

  it('should return the digits after the first four digits', () => {
    account.init('12345678').serialNumber().should.eql('5678');
  });

  it('should return the digits after the first five digits if there is a clearing number checksum', () => {
    account.init('8000-2-0000000000').serialNumber().should.eql('0000000000');
  });

  it('should be the empty string if there are not enough numbers', () => {
    account.init('12').serialNumber().should.eql('');
  });
});
