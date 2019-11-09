module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: [
    "**/tests/**/*.(spec).(tsx)"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "jest.tsconfig.json",
    }
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"]
};