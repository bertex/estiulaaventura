(function() {
	var app = angular.module('EstiulaAventura', ['ui.bootstrap']);

	app.controller("TabController", function() {
		this.tab = 1;
		this.background = "img/fons_petit.jpg";
		this.banner = "img/banner_fons_petit.jpg";
		this.fons = "col-centre-petit";

		/* definicio dels thumbnails de circuits. Separats per circuits i per files */
		this.baumaImgRow1 = [
		                     { src:"img/circuits/bauma/taronja1.jpg"},
		                     { src:"img/circuits/bauma/taronja3.jpg"},
		                     { src:"img/circuits/bauma/taronja5.jpg"} ];
		this.baumaImgRow2 = [
		                     { src:"img/circuits/bauma/taronja2.jpg"},
		                     { src:"img/circuits/bauma/taronja4.jpg"},
		                     { src:"img/circuits/bauma/taronja6.jpg"} ];
		this.toscaImgRow1 = [
		                     { src:"img/circuits/tosca/blau2.jpg"},
		                     { src:"img/circuits/tosca/blau3.jpg"},
		                     { src:"img/circuits/tosca/blau5.jpg"} ];
		this.toscaImgRow2 = [
		                     { src:"img/circuits/tosca/blau1.jpg"},
		                     { src:"img/circuits/tosca/blau4.jpg"},
		                     { src:"img/circuits/tosca/blau6.jpg"} ];
		this.ollaImgRow1 = [
		                    { src:"img/circuits/olla/olla1.jpg"},
		                    { src:"img/circuits/olla/olla3.jpg"},
		                    { src:"img/circuits/olla/olla5.jpg"} ];
		this.ollaImgRow2 = [
		                    { src:"img/circuits/olla/olla2.jpg"},
		                    { src:"img/circuits/olla/olla4.jpg"},
		                    { src:"img/circuits/olla/olla6.jpg"} ];
		this.colomerImgRow1 = [
		                       { src:"img/circuits/colomer/colomer4.jpg"},
		                       { src:"img/circuits/colomer/colomer3.jpg"},
		                       { src:"img/circuits/colomer/colomer5.jpg"} ];
		this.colomerImgRow2 = [
		                       { src:"img/circuits/colomer/colomer2.jpg"},
		                       { src:"img/circuits/colomer/colomer1.jpg"},
		                       { src:"img/circuits/colomer/colomer6.jpg"} ];
		this.falcoImgRow1 = [
		                     { src:"img/circuits/falco/tirolina1.jpg"},
		                     { src:"img/circuits/falco/tirolina2.jpg"},
		                     { src:"img/circuits/falco/tirolina3.jpg"} ];
		/* definicio de les diferents gallery */

		this.galleryOlla = [
		                    { src:"img/gallery/circuits/olla1.jpg"},
		                    { src:"img/gallery/circuits/olla2.jpg"} ];

		this.galleryColomer = [
		                       { src:"img/gallery/circuits/colomer1.jpg"},
		                       { src:"img/gallery/circuits/colomer2.jpg"} ];

		this.galleryFalco = [
		                     { src:"img/gallery/circuits/falco1.jpg"},
		                     { src:"img/gallery/circuits/falco2.jpg"} ];

		this.galleryTosca = [ { src:"img/gallery/circuits/tosca2.jpg"} ];

		this.galleryAguila = [ { src:"img/gallery/circuits/tirolina_gran.jpg"} ];

		this.galleryBauma = [
		                     { src:"img/gallery/circuits/bauma1.jpg"},
		                     { src:"img/gallery/circuits/bauma2.jpg"} ];

		this.galleryEmpreses = [ { src:"img/gallery/activitats/banner_empreses.jpg"} ];

		this.galleryEscoles = [ { src:"img/gallery/activitats/banner_escoles.jpg"} ];

		this.galleryFestes = [ { src:"img/gallery/activitats/banner_festes.jpg"} ];

		this.galleryComiats = [ { src:"img/gallery/activitats/banner_comiats.jpg"} ];

		this.gallery = [
		                { src:"img/gallery/banner_foto1.jpg"},
		                { src:"img/gallery/banner_foto2.jpg"},
		                { src:"img/gallery/banner_foto3.jpg"},
		                { src:"img/gallery/banner_foto4.jpg"},
		                { src:"img/gallery/banner_foto5.jpg"},
		                { src:"img/gallery/banner_foto6.jpg"} ];

		/* definicio de les imatges e compromis ecologic */ 
		this.compromis = [
		                  { src:"img/inici/compostweb.jpg"},
		                  { src:"img/inici/lavabosweb.jpg"},
		                  { src:"img/inici/plaquesweb.jpg"},
		                  { src:"img/inici/bateriesweb.jpg"},
		                  { src:"img/inici/ovellaweb.jpg"},
		                  { src:"img/inici/extracfustaweb.jpg"},
		                  { src:"img/inici/boletweb.jpg"},
		                  { src:"img/inici/aprofherba.jpg"} ];

		/* funció que defineix quin banner i quin fons te cada pagina */ 
		this.setTab = function(setTab) {
			this.tab = setTab;
			if ((setTab==1)||(setTab==7)) {
				this.background="img/fons_web.jpg";
				this.banner ="img/banner_web.jpg";
				if (setTab==7)  {
					this.fons = "col-centre-faq"
				} else {
					this.fons="col-centre-portada";	
				}
			} else if  ((setTab>=9) || setTab<=13){
				this.fons="col-centre-circuits";
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

	/* directiva de canvi de background en el banner */ 
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

	/* directiva de canvi de background de la WEB */ 
	app.directive('backImg', function(){
		return function(scope, element, attrs){
			attrs.$observe('backImg', function(value) {
				element.css({
					'background': 'url(' + value+ ') no-repeat center top'
				});
			});
		};
	});

	/* Controlador Modal (abans que s'obri) */ 
	app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

		$scope.open = function (photo) {

			var modalInstance = $modal.open({
				templateUrl: 'popUp.html',
				scope: $scope,
				controller: ModalInstanceCtrl,
				resolve: {
					items: function () {
						return $scope.items;
					},
					// this returns as undefined
					photo: function(){
						return photo;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	});
	
	/* controlador finestra modal un cop oberta */
	var ModalInstanceCtrl = function ($scope, $modalInstance, photo) {

		$scope.photo = photo;

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		console.log($scope);
	};

	/* Controlador de Dropdown */ 
	app.controller('DropdownCtrl', function ($scope, $log) {
		/* definicio dels menus dropdown. link i titol*/
		$scope.inici = [
		                {src:'quisom.html', desc:'Qui som?'},
		                {src:'aquivadirigit.html', desc: 'A qui va dirigit?'},
		                {src:'onsom.html', desc:'On som?'},
		                {src:'seguretat.html', desc:'Seguretat'},
		                {src:'compromis.html', desc:'Compromís ecològic'},
		                {src:'faq.html', desc:'Preguntes freqüents'}
		                ];
		$scope.tarifes = [
		                  {src:'horaris.html', desc:'Horaris i Calendari 2017 '},
		                  {src:'tarifes.html', desc: 'Tarifes '},
		                  {src:'tiquetRegal.html', desc:'Tiquet Regal'}
		                  ];

		$scope.status = {
				isopen: false
		};

		$scope.toggled = function(open) {
			$log.log('Dropdown is now: ', open);
		};

		$scope.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};
	});
	/* controlador de Carrusel */
	app.controller('CarouselDemoCtrl', function ($scope) {
		  $scope.myInterval = 5000;
		  var slides = $scope.slides = [];
		});

})();
