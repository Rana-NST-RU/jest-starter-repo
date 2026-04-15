const { registerUser } = require('../src/services/authService');

test('registerUser should return success when user data is valid', () => {
    const user = {
        name: 'Ranajeet Roy',
        email: 'ranajeet.roy2024@gmail.com',
        password: 'Password123'
    };
    expect(registerUser(user)).toEqual({
        success: true,
        message: 'User registered successfully'
    });
});

test('registerUser should return failure when user data is invalid', () => {
    const user = {
        name: 'Ranajeet Roy',
        email: 'ranajeet.roy2024@gmail.com',
        password: '123'
    };
    expect(registerUser(user)).toEqual({
        success: false,
        message: 'Password is not strong enough'
    });
});

test('registerUser should return failure when user data is invalid', () => {
    const user = {
        email: "abc@gmail.com",
    }
    expect(registerUser(user)).toEqual({
        success: false,
        message: 'Name is required'
    });
});

test('registerUser should return failure when user data is invalid', () => {
    const user = {
        name: "        ",
        email: "abc@gmail.com",
        password: "Password123"
    }
    expect(registerUser(user)).toEqual({
        success: false,
        message: 'Name is required'
    });
});