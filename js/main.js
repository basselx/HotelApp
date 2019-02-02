$("#PopUpBtn").click(function () { 

    $("#PopUp").addClass("active")

});


$(".PopUpClose").click(function () {

    $("#PopUp").removeClass("active")

});




(function () {
    'use strict';

    angular.module('HotelApp', ['dx']).controller('HotelCtrl', HotelCtrl);
  
    function HotelCtrl($scope) {
        var self = this;

        self.filter = {};
        $scope.order;
        self.hotels = [
                    { name: 'Hotel californian', star: 3, price: 100, image: "img/placeholder.png" },
     { name: 'Hotel of Amman', star: 2, price: 50, image: "img/placeholder.png" },
     { name: 'Kiev hotel', star: 5, price: 77, image: "img/placeholder.png" },
     { name: 'Kempinski dead sea', star: 5, price: 200, image: "img/placeholder.png" },
     { name: 'Marriott liviv', star: 5, price: 230, image: "img/placeholder.png" },
     { name: 'Kings landing', star: 2, price: 50, image: "img/placeholder.png" },
     { name: 'Sheraton ', star: 4, price: 99, image: "img/placeholder.png" },
     { name: 'Hisham hotel', star: 1, price: 100, image: "img/placeholder.png" },
     { name: 'Aqaba', star: 2, price: 100, image: "img/placeholder.png" },
     { name: 'Kings gates', star: 2, price: 100, image: "img/placeholder.png" },
        ];
        $scope.hotels = self.hotels;
        $scope.getNumber = function (num) {
            return new Array(num);
        }

        $scope.rangeSelectorOptions = {
            margin: {
                top: 20
            },
            size: {
                height: 140
            },
            dataSource: self.hotels,
            dataSourceField: "price",
            scale: {
                tickInterval: 50,
                minorTickInterval: 50,
                label: {
                    format: {
                        type: ""
                    }
                }
            },
            behavior: {
                callValueChanged: "onMoving"
            },
            title: "",
            onValueChanged: function (e) {
                var selectedEmployees = $.grep(self.hotels, function (employee) {
                    return employee.price >= e.value[0] && employee.price <= e.value[1];
                });
                $scope.hotels = selectedEmployees;
            }
        };




        self.filterBystar = filterBystar;
        function filterBystar(hotel) {
            return self.filter[hotel.star] || noFilter(self.filter);
        }
     


        function noFilter(filterObj) {
            return Object.
              keys(filterObj).
              every(function (key) { return !filterObj[key]; });
        }



    }



}());





