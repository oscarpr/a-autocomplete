import { AAutocompletePage } from './app.po';

describe('a-autocomplete App', () => {
  let page: AAutocompletePage;

  beforeEach(() => {
    page = new AAutocompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
