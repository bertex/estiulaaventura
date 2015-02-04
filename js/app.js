(function() {
	var app = angular.module('EstiulaAventura', ['ui.bootstrap']);

	app.controller("TabController", function() {
		this.tab = 1;
		this.background = "img/fons_petit.jpg";
		this.banner = "img/banner_fons_petit.jpg";
		this.fons = "col-centre-petit";
		this.baumaImgRow1 = [
		                     { src:"img/circuits/bauma/taronja1.jpg"},
		                     { src:"img/circuits/bauma/taronja3.jpg"},
		                     { src:"img/circuits/bauma/taronja5.jpg"}];
		this.baumaImgRow2 = [
		                     { src:"img/circuits/bauma/taronja2.jpg"},
		                     { src:"img/circuits/bauma/taronja4.jpg"},
		                     { src:"img/circuits/bauma/taronja6.jpg"} ];


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

	app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

		$scope.items = ['item1', 'item2', 'item3'];

		$scope.open = function (size) {

			var modalInstance = $modal.open({
				templateUrl: 'popUp.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					},
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

	// Please note that $modalInstance represents a modal window (instance) dependency.
	// It is not the same as the $modal service used above.

	app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

		$scope.items = items;
		$scope.selected = {
				item: $scope.items[0]
		};

		$scope.ok = function () {
			$modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});
})();
