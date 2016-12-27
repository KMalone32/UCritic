angular.module("ucritic").directive("minimize", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on("click", function() {
        console.log(element[0].parent());
      });
    }
  }
});
