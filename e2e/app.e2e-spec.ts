import { AngularFromScratchPage } from './app.po';

describe('angular-from-scratch App', function() {
  let page: AngularFromScratchPage;

  beforeEach(() => {
    page = new AngularFromScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
