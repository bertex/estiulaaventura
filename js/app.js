(function() {
  var app = angular.module('EstiulaAventura', []);

  app.controller("TabController", function() {
	    this.tab = 1;
	    this.background = "img/fons_petit.jpg";
	    this.banner = "img/banner_fons_petit.jpg";

	    this.isSet = function(checkTab) {
	      return this.tab === checkTab;
	    };
	    
	    this.setTab = function(setTab) {
	      this.tab = setTab;
	      if ((setTab==1)||(setTab==7)) {
	    	  this.background="img/fons_web.jpg";
	    	  this.banner ="img/banner_web.jpg";
	      } else if (setTab==14) {
	    	  this.background="img/fons_activitats.jpg";
	    	  this.banner ="img/banner_activitats.jpg";
	      } else if (setTab==20) {
	    	  this.background="img/fons_tarifes.jpg";
	    	  this.banner ="img/banner_tarifes.jpg";
	      }
	    };
	  });
  
  app.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {
	            element.css({
	                'background': 'url(' + value +') no-repeat top center'
	            });
	        });
	    };
	});
})();
