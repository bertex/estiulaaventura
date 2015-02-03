(function() {
  var app = angular.module('EstiulaAventura', []);

  app.controller("TabController", function() {
	    this.tab = 1;
	    this.background = "img/fons_petit.jpg";
	    this.banner = "img/banner_fons_petit.jpg";
	    this.fons = "col-centre-petit"

	    this.setTab = function(setTab) {
	      this.tab = setTab;
	      if ((setTab==1)||(setTab==7)) {
	    	  this.background="img/fons_web.jpg";
	    	  this.banner ="img/banner_web.jpg";
	    	  this.fons="col-centre-portada";
	      } else if ((setTab>=15)&& (setTab <=18) ) {
	    	  this.background="img/fons_activitats.jpg";
	    	  this.banner ="img/banner_activitats.jpg";
	    	  this.fons="col-centre-activitats"
	      } else if ((setTab==20) ||(setTab==14)) {
	    	  this.background="img/fons_tarifes.jpg";
	    	  this.banner ="img/banner_tarifes.jpg";
	    	  this.fons = "col-centre-tarifes";
	      } else if (setTab==21)  {
	    	  this.fons = "col-centre-tiquet";
	      }
	      
	    };
	  });
  
  app.directive('bannerImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('bannerImg', function(value) {
	            element.css({
	                'background-image': 'url(' + value +')',
	                'background-size' : '100%',
	                'background-repeat' : 'no-repeat',
	                'background-position' : 'top center'
	            });
	        });
	    };
	});
  
  app.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {
	            element.css({
	            	'background': 'url(' + value+ ') no-repeat center top'
	            });
	        });
	    };
	});
})();
