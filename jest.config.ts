import type {JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest ={
    preset: 'ts-jest',
    testEnvironment: "node",
    collectCoverage: true,
    verbose: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8'
}

export default config