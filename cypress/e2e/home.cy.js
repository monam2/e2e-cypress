describe('홈페이지 테스트 코드', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  // 첫 번째 테스트 시나리오
  it('페이지에 진입하면 페이지가 정상적으로 표시된다.', () => {
    cy.getByCy('counter').contains(0);
  });

  // 두 번째 테스트 시나리오
  it('플러스 버튼을 누르면 카운터가 1이 증가된다.', () => {
    cy.getByCy('add-button').click();
    cy.getByCy('counter').contains(1);
  });

  it('마이너스 버튼을 누르면 카운터가 1 감소한다.', () => {
    cy.getByCy('minus-button').click();
    cy.getByCy('counter').get(1);
  });
});
