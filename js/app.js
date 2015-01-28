(function() {
  var app = angular.module('EstiulaAventura', []);

  app.controller("TabController", function() {
	    this.tab = 1;
	    this.background = "tot";
	    this.banner ="img/banner_web.jpg"

	    this.isSet = function(checkTab) {
	      return this.tab === checkTab;
	    };
	    
	    this.setTab = function(setTab) {
	      this.tab = setTab;
	      if ((setTab==2)||(setTab==8)) {
	    	  this.background="petit";
	    	  this.banner ="img/banner_fons_petit.jpg";
	      };
	    };
	  });
})();