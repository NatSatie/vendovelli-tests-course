const { queryString } = require('./queryString');

describe('object to query string', () => {
  it('it should create a valid query string', () => {
    let obj = {
      name: 'Fabio',
      carrer: 'developer',
    };
    expect(queryString(obj)).toBe('name=Fabio&carrer=developer');
  });

  it('it should create a valid string even with array', () => {
    let obj = {
      name: 'Fabio',
      abilities: ['js', 'tdd'],
    };
    console.log(queryString(obj));
    expect(queryString(obj)).toBe('name=Fabio&abilities=js,tdd');
  });

  it('it should return an error when objec is passed as value ', () => {
    let obj = {
      name: 'Fabio',
      abilities: {
        first: 'js',
        second: 'tdd',
      },
    };
    expect(() => queryString(obj)).toThrowError();
  });
});
