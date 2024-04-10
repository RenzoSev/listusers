describe('List Users', () => {
  it('should render initial page', () => {
    cy.visit('http://localhost:5173/');

    cy.contains('LIST USERS').should('have.length', 1);

    cy.get('figure').should('have.length', 15);
    cy.get('svg').should('have.length', 15);
    cy.get('[class=card-title]').should('have.length', 15);

    cy.get('p').should('have.length', 35);

    cy.get('a').contains('1');
    cy.get('a').contains('2');
    cy.get('a').contains('3');
    cy.get('a').contains('4');
    cy.get('a').contains('5');
    cy.get('a').contains('6');
    cy.get('a').contains('7');
    cy.get('a').contains('8');
    cy.get('a').contains('9');
    cy.get('a').contains('10');
    cy.get('a').contains('11');
    cy.get('a').contains('12');
    cy.get('a').contains('13');
    cy.get('a').contains('15');
    cy.get('a').contains('15');
  });

  it('should use carousel', () => {
    cy.visit('http://localhost:5173/');

    cy.get('a').eq(0).click();
    cy.url().should('include', '#item0');

    cy.get('a').eq(1).click();
    cy.url().should('include', '#item1');

    cy.get('a').eq(2).click();
    cy.url().should('include', '#item2');

    cy.get('a').eq(3).click();
    cy.url().should('include', '#item3');

    cy.get('a').eq(4).click();
    cy.url().should('include', '#item4');

    cy.get('a').eq(5).click();
    cy.url().should('include', '#item5');

    cy.get('a').eq(6).click();
    cy.url().should('include', '#item6');

    cy.get('a').eq(7).click();
    cy.url().should('include', '#item7');

    cy.get('a').eq(8).click();
    cy.url().should('include', '#item8');

    cy.get('a').eq(9).click();
    cy.url().should('include', '#item9');

    cy.get('a').eq(10).click();
    cy.url().should('include', '#item10');

    cy.get('a').eq(11).click();
    cy.url().should('include', '#item11');

    cy.get('a').eq(12).click();
    cy.url().should('include', '#item12');

    cy.get('a').eq(13).click();
    cy.url().should('include', '#item13');

    cy.get('a').eq(14).click();
    cy.url().should('include', '#item14');
  });

  it('should open modal with correct address info', () => {
    cy.visit('http://localhost:5173/debug');
    cy.get('dialog').should('have.css', 'opacity', '0');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'none');

    // First User

    cy.get('.btn.btn-circle').eq(1).click();

    cy.get('dialog').should('have.css', 'opacity', '1');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'auto');

    cy.get('.modal-box > h3').should('have.text', 'آیناز کریمی');
    cy.get('.modal-box > p:nth-child(3)').should('have.text', 'City: تهران');
    cy.get('.modal-box > p:nth-child(4)').should(
      'have.text',
      'Street: نام قدیم میدان های تهران'
    );
    cy.get('.modal-box > p:nth-child(5)').should(
      'have.text',
      'Street Number: 9617'
    );
    cy.get('.modal-box > p:nth-child(6)').should('have.text', 'State: گلستان');
    cy.get('.modal-box > p:nth-child(7)').should(
      'have.text',
      'Postcode: 66909'
    );

    cy.get('.btn-sm').click();
    cy.get('dialog').should('have.css', 'opacity', '0');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'none');

    // Second User

    cy.get('.btn.btn-circle').eq(6).click();

    cy.get('dialog').should('have.css', 'opacity', '1');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'auto');

    cy.get('.modal-box > h3').should('have.text', 'Felecia Snyder');
    cy.get('.modal-box > p:nth-child(3)').should(
      'have.text',
      'City: San Mateo'
    );
    cy.get('.modal-box > p:nth-child(4)').should(
      'have.text',
      'Street: Cherry St'
    );
    cy.get('.modal-box > p:nth-child(5)').should(
      'have.text',
      'Street Number: 2894'
    );
    cy.get('.modal-box > p:nth-child(6)').should('have.text', 'State: Alabama');
    cy.get('.modal-box > p:nth-child(7)').should(
      'have.text',
      'Postcode: 88992'
    );

    cy.get('.btn-sm').click();
    cy.get('dialog').should('have.css', 'opacity', '0');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'none');

    // Third User

    cy.get('.btn.btn-circle').eq(15).click();

    cy.get('dialog').should('have.css', 'opacity', '1');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'auto');

    cy.get('.modal-box > h3').should('have.text', 'Mestan Tokgöz');
    cy.get('.modal-box > p:nth-child(3)').should('have.text', 'City: Isparta');
    cy.get('.modal-box > p:nth-child(4)').should(
      'have.text',
      'Street: Filistin Cd'
    );
    cy.get('.modal-box > p:nth-child(5)').should(
      'have.text',
      'Street Number: 781'
    );
    cy.get('.modal-box > p:nth-child(6)').should('have.text', 'State: Muş');
    cy.get('.modal-box > p:nth-child(7)').should(
      'have.text',
      'Postcode: 34692'
    );

    cy.get('.btn-sm').click();
    cy.get('dialog').should('have.css', 'opacity', '0');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'none');

    // Fourth User

    cy.get('.btn.btn-circle').eq(3).click({ force: true });

    cy.get('dialog').should('have.css', 'opacity', '1');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'auto');

    cy.get('.modal-box > h3').should('have.text', 'Kaya Akyürek');
    cy.get('.modal-box > p:nth-child(3)').should(
      'have.text',
      'City: Balıkesir'
    );
    cy.get('.modal-box > p:nth-child(4)').should(
      'have.text',
      'Street: Atatürk Sk'
    );
    cy.get('.modal-box > p:nth-child(5)').should(
      'have.text',
      'Street Number: 8651'
    );
    cy.get('.modal-box > p:nth-child(6)').should(
      'have.text',
      'State: Balıkesir'
    );
    cy.get('.modal-box > p:nth-child(7)').should(
      'have.text',
      'Postcode: 77604'
    );

    cy.get('.btn-sm').click();
    cy.get('dialog').should('have.css', 'opacity', '0');
    cy.get('dialog').should('have.css', 'visibility', 'visible');
    cy.get('dialog').should('have.css', 'pointer-events', 'none');
  });
});
