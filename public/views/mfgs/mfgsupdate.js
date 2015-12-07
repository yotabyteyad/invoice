app.controller("mfgsUpdateCtrl", function ($location, $scope, Manufacturers, $timeout){
	
	//console.log($routeParams);

	(function(){
		$scope.mfgsModel = Manufacturers.manufacturer;
		if ($scope.mfgsModel.name === undefined){
				$location.url("/mfgslist");
		}
	}());

	//console.log('mfgsEditCtrl', $scope.mfgsModel);

	$scope.UpdateManufacturer = function(){
		Manufacturers.update($scope.mfgsModel)
		.success(function(){				
		})
		.error(function(){
				console.log('Error while updating Manufacturers');
		});
	  // /toastr.success('Manufacturer updated successfully');
	  toastr.success('Changes saved successfully');	
	};

});	