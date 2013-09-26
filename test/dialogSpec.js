describe('kDialog', function() {
  var elm, scope;

  // load the tabs code
  beforeEach(module('lankModule'));

  // load the templates
  // beforeEach(module('tpl/tabs.html', 'tpl/pane.html'));

  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element(
      '<div>' +
        '<k-dialog title="Good">' +
          '<p>' +
            'this is body text' +
          '</p>' +
        '</k-dialog>' +
      '</div>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));
});