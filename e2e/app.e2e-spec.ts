import { AngularPoweredTodoPage } from './app.po';

describe('angular-powered-todo App', function() {
  let page: AngularPoweredTodoPage;

  beforeEach(() => {
    page = new AngularPoweredTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
