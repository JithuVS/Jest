const greet = require('./index'); 

test('greets a user by name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
}); 
