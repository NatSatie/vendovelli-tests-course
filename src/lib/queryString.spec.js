const { queryString } = require('./queryString');

describe('object to query string', () => {
  it('it should create a val;id query string', () => {
    let obj = {
      name: 'Fabio',
      carrer: 'developer',
    };
    expect(queryString(obj)).toBe('name=Fabio&carrer=developer');
  });
});
