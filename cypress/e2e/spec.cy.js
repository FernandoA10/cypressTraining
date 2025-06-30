describe('Work with iFrames', () => {
  it('passes', () => {
    cy.visit('https://www.apple.com/')
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click()

    cy.wait(3000)

cy.origin("https://secure6.store.apple.com", () => { 
  const getIframeBody = () => {
  return cy
    .get('#aid-auth-widget-iFrame' , {timeout: 1000})
    .its('0.contentDocument.body').should('exist')
    .then(cy.wrap)
}


  getIframeBody().find('.form-checkbox-indicator').click()

    })
  })
})