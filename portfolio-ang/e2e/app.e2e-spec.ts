import { PortfolioAngPage } from './app.po';

describe('portfolio-ang App', () => {
  let page: PortfolioAngPage;

  beforeEach(() => {
    page = new PortfolioAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
