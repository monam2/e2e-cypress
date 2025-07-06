/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * data-cy로 설정된 엘리먼트를 쉽게 찾을 수 있는 커스텀 API
       * @param text - data-cy 속성 값
       * @example cy.getByCy('counter')
       * @example cy.getByCy('add-button').click()
       */
      getByCy(text: string): Chainable;
    }
  }
}

export {};
