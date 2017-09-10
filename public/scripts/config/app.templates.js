angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/details/details.html","<div ng-if=\"details.details\">\n  <div class=\"details-heading\">\n    <h2 style=\"text-transform:capitalize;\">{{details.details.origin_city}} > {{details.details.destination_city}} <span ng-if=\"details.details.return_date\"> > {{details.details.origin_city}}</span></h2>\n    <div>\n      <h6>Depart: {{details.details.departure_date}}</h6>\n      <h6 ng-if=\"details.details.return_date\">Return: {{details.details.return_date}}</h6>\n    </div>\n  </div>\n  <div>\n    <!-- flights list-->\n      <div class=\"list-element\" ng-repeat=\"flight in details.flightListToDisplay track by $index\">\n        <div class=\"price\"><h4 ng-if=\"!details.returnFlights.length\">Rs.{{flight.price}}</h4><h4 ng-if=\"details.returnFlights.length\">Rs.{{flight.price + details.returnFlights[$index].price}}</h4>\n          <div class=\"price\">\n            <div>{{flight.flight_id}}</div>\n            <div>{{flight.origin_city}} > {{flight.destination_city}}</div>\n            <div>Depart: {{flight.departure_time}}</div>\n            <div>Arrive: {{flight.arrival_time}}</div>\n          </div>\n          <div class=\"return\" ng-if=\"details.returnFlights.length\">\n            <div>{{details.returnFlights[$index].flight_id}}</div>\n            <div>{{details.returnFlights[$index].origin_city}} > {{details.returnFlights[$index].destination_city}}</div>\n            <div>Depart: {{details.returnFlights[$index].departure_time}}</div>\n            <div>Arrive: {{details.returnFlights[$index].arrival_time}}</div>\n          </div>\n        </div>\n        <div class=\"logo\">\n          <div><img src=\"./assets/images/flight.jpg\" /></div>\n          <input type=\"button\" value=\"Book this Flight\" />\n        </div>\n      </div>\n      <!-- if no. of return flights are greater the the forward flights-->\n      <div class=\"list-element\" ng-if=\"details.returnFlights.length > details.flightListToDisplay.length\" ng-repeat=\"flight in details.returnFlights | limitTo: (details.returnFlights.length - details.flightListToDisplay.length): $index\" ng-init=\"$index = details.flightListToDisplay.length\">\n        <div class=\"price\"><h4>Rs.{{details.returnFlights[$index].price}}</h4>\n          <div class=\"price\" ng-if=\"details.returnFlights.length\">\n            <div>{{details.returnFlights[$index].flight_id}}</div>\n            <div>{{details.returnFlights[$index].origin_city}} > {{details.returnFlights[$index].destination_city}}</div>\n            <div>Depart: {{details.returnFlights[$index].departure_time}}</div>\n            <div>Arrive: {{details.returnFlights[$index].arrival_time}}</div>\n          </div>\n        </div>\n        <div class=\"logo\">\n          <div><img src=\"./assets/images/flight.jpg\" /></div>\n          <input type=\"button\" value=\"Book this Flight\" />\n        </div>\n      </div>\n      <!-- if no flight for given search is present-->\n      <div ng-if=\"details.flightListToDisplay.length==0 && details.returnFlights.length ==0\">\n        <h5>No flight available for the given details.</h5>\n      </div>\n  </div>\n</div>\n<div ng-if=\"!details.details\" style=\"height:100%\">\n  <h5>Flight details will be displayed here.</h5>\n</div>\n");
$templateCache.put("components/filters/filters.html","<div class=\"flight-way\">\n  <input type=\"button\" value=\"One Way\" ng-model=\"filters.oneway\" ng-click=\"filters.toggleViews(\'oneway\')\" ng-class=\"filters.oneway? \'active\':\'\'\" class=\"btn-way-one\" id=\"oneWay\"/>\n  <input type=\"button\" value=\"Return\" ng-model=\"filters.twoway\" ng-click=\"filters.toggleViews(\'twoway\')\" ng-class=\"filters.twoway? \'active\':\'\'\" class=\"btn-way-one btn-way-two\" id=\"twoWay\"/>\n</div>\n<div class=\"filters\">\n  <input ng-model=\"filters.originCity\" class=\"container\" placeholder=\"Enter origin city\" ng-focus=\"filters.originCityFlag=false\" />\n  <span class=\"error\" ng-if=\"filters.originCityFlag\">Please mention the origin city.</span>\n  <input ng-model=\"filters.destinationCity\"  class=\"container\" placeholder=\"Enter destn. city\"  ng-focus=\"filters.destinationCityFlag=false\" />\n  <span class=\"error\" ng-if=\"filters.destinationCityFlag\">Please mention the destination city.</span>\n  <input type=\"date\" ng-model=\"filters.departureDate\" class=\"container\"  ng-focus=\"filters.departureDateFlag=false\" />\n  <span class=\"error\" ng-if=\"filters.departureDateFlag\">Please mention departure date.</span>\n  <input type=\"date\" min=\"06/09/2017\" ng-model=\"filters.returnDate\" class=\"container\"  ng-show=\"filters.twoway\" ng-focus=\"filters.returnDateFlag=false\" />\n  <span class=\"error\" ng-if=\"filters.returnDateFlag && filters.twoway\">Please mention return date.</span>\n  <input type=\"number\" min=\"0\" ng-model=\"filters.noOfPassengers\" class=\"container\"  ng-focus=\"filters.noOfPassengersFlag=false\" />\n  <span class=\"error\" ng-if=\"filters.noOfPassengersFlag\">Please mention no. of passengers.</span>\n  <input type=\"button\" value=\"Search\" class=\"btnSearch\" ng-click=\"filters.fetchResults()\"/>\n</div>\n<div class=\"range-filter\">\n  <h5>Refine Flight Search</h5>\n  <rzslider class=\"custom-slider rz-slider\" rz-slider-model=\"filters.slider.minValue\" rz-slider-high=\"filters.slider.maxValue\" rz-slider-options=\"filters.slider.options\"></rzslider>\n</div>\n");
$templateCache.put("components/home/home.html","<div class=\"\">\n  <filters-component id=\"filters\" subscriber-name=\"filtersComponent\"></filters-component>\n  <details-component id=\"details\" subscriber-name=\"detailsComponent\"></details-component>\n</div>\n");}]);