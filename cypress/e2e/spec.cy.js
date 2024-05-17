describe('My First Test', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })
    it('Visits the amaysim', () => {
        cy.visit('https://www.amaysim.com.au/')
        cy.contains('Show all').click()
        cy.url().should('include', '/sim-plans')
        cy.get('a[href*="/mobile/cart/7-day-10gb"]').click()
        cy.url().should('include', '/mobile/cart/7-day-10gb')
        cy.contains('pick a new number').click()
        cy.get('[type="radio"]').check('ESIM', { force: true })
        cy.contains('checkout').click()
        cy.url().should('include', '/mobile/your-details')
        cy.wait(10000).get('[type="radio"]').check('no', { force: true })
        cy.get('input[name="firstName"]').type('test')
        cy.get('input[name="lastName"]').type('test')
        cy.get('input[name="dateOfBirth"]').type('04/04/1994')
        cy.get('input[name="email"]').type('subway90@gmail.com')
        cy.get('input[name="password"]').type('123password')
        cy.get('input[name="contactNumber"]').type('0467231678')
        cy.get('input[class="react-autosuggest__input"]').type('Level 6, 17-19 Bridge St, SYDNEY NSW 2000')
        cy.get('ul[class="react-autosuggest__suggestions-list"]')
        cy.contains('Level 6 17-19 Bridge St, SYDNEY NSW 2000').click()
        cy.get('[type="radio"]').check('CREDIT_CARDS', { force: true })
        cy.get('div[class="css-13z3nwt"]').find('label[class="css-1ne7y3i"]').find('input[type="checkbox"]').check({ force: true })
        cy.get('button[class="css-1957xzp"]').click()
        cy.get('iframe[title="Secure card number input frame"]')
            .should('be.visible')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find(`input[name='cardnumber']`)
                    .type('4242 4242 4242 4242')
            })
        //cy.getWithinIframe('[name="cardnumber"]').type('4242 4242 4242 4242')
        //cy.getWithinIframe('[name="exp-date"]').type('01/27')
        //cy.getWithinIframe('[name="cvc"]').type('123')
    })
})