module.exports = {
    // Other Jest configurations...
    setupFiles: ['<rootDir>/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    // Add the esModuleInterop configuration option
    // to allow ES6 module syntax in tests
    esModuleInterop: true,
};