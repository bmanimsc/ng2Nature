import { Ng2NaturePage } from './app.po';

describe('ng2-nature App', () => {
  let page: Ng2NaturePage;

  beforeEach(() => {
    page = new Ng2NaturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
