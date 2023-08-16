export default {
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/frontend/jest.setup.js"],
};
