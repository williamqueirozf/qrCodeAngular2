import { TesteqrcodePage } from './app.po';

describe('testeqrcode App', () => {
  let page: TesteqrcodePage;

  beforeEach(() => {
    page = new TesteqrcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
