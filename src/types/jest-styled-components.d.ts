import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveStyleRule(property: string, value?: string): R
    }
  }
}
