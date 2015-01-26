(function() {
  var app = angular.module('EstiulaAventura', []);

  app.controller("TabController", function() {
	    this.tab = 1;
	    this.background = "tot";

	    this.isSet = function(checkTab) {
	      return this.tab === checkTab;
	    };

	    this.setTab = function(setTab) {
	      this.tab = setTab;
	      if (setTab==2) {this.background="petit"};
	    };
	  });
})();