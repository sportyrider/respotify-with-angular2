import { RespotifyPage } from './app.po';

describe('respotify App', function() {
  let page: RespotifyPage;

  beforeEach(() => {
    page = new RespotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
