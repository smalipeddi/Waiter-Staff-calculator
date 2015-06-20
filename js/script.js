myapp = angular.module('myApp', ['ngMessages']);
myapp.controller("WaiterStaffCalculator", function($scope, $attrs) {

    $scope.MealDetails = {};
    $scope.cutomerCharges = {};
    $scope.WaiterEarnings = {};
    $scope.MealDetails.basePrice = 0;
    $scope.MealDetails.taxRate = 0;
    $scope.MealDetails.tipPercent = 0;
    $scope.MealDetails.mealCount = 0;
    $scope.WaiterEarnings.tipCount = 0;
    $scope.cutomerCharges.subTotal = 0;
    $scope.cutomerCharges.waiterTip = 0;
    $scope.originMealDetailsForm = angular.copy($scope.MealDetails);
    $scope.origincutomerChargesForm = angular.copy($scope.cutomerCharges);
    $scope.originWaiterEarningsForm = angular.copy($scope.WaiterEarnings);

    $scope.submit = function() {
        if ($scope.myForm.$valid) {

            $scope.MealDetails.basePrice = parseInt($scope.MealDetails.basePrice);
            $scope.MealDetails.taxRate = parseInt($scope.MealDetails.taxRate);
            $scope.MealDetails.tipPercent = parseInt($scope.MealDetails.tipPercent);
            $scope.cutomerCharges.subTotal = $scope.MealDetails.basePrice + (($scope.MealDetails.taxRate / 100) * $scope.MealDetails.basePrice);
            $scope.cutomerCharges.waiterTip = ($scope.cutomerCharges.subTotal * ($scope.MealDetails.tipPercent) / 100);
            console.log("waiterTip =" + $scope.cutomerCharges.waiterTip);
            /*$scope.customerCharges.waiterTip = parseInt($scope.customerCharges.waiterTip);*/
            $scope.cutomerCharges.total = $scope.cutomerCharges.subTotal + $scope.cutomerCharges.waiterTip;
            console.log("customer total charges" + $scope.cutomerCharges.total);
            $scope.MealDetails.mealCount++;
            console.log("meal count " + $scope.MealDetails.mealCount);
            /*$scope.WaiterEarnings.tipCount = parseInt($scope.WaiterEarnings.tipCount);*/
            console.log("initial waiter earnning tip =" + $scope.WaiterEarnings.tipCount);
            console.log("customer waiter tip = " + $scope.cutomerCharges.waiterTip);
            $scope.WaiterEarnings.tipCount = $scope.WaiterEarnings.tipCount + $scope.cutomerCharges.waiterTip;
            console.log($scope.WaiterEarnings.tipCount);
            $scope.WaiterEarnings.AverageTip = $scope.WaiterEarnings.tipCount / $scope.MealDetails.mealCount;

        }

        $scope.reset = function() {

            $scope.MealDetails = angular.copy($scope.originMealDetailsForm); // Assign clear state to modified form 
            $scope.cutomerCharges = angular.copy($scope.origincutomerChargesForm);
            $scope.WaiterEarnings = angular.copy($scope.originWaiterEarningsForm);
            $scope.myForm.$setPristine();
        }

        reset();

    }
});