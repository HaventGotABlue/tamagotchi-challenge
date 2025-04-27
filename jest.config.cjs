module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
	},
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
	},
}
