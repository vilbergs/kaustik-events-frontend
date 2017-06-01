import { KaustikApiTestPage } from './app.po';

describe('kaustik-api-test App', () => {
  let page: KaustikApiTestPage;

  beforeEach(() => {
    page = new KaustikApiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
