(function() {

  angular
    .module('WeatherApp', [])
    .controller('main', ['weatherService',
      function (weatherService) {

        var vm = this;
        vm.Search = function() {

          weatherService.GetWeather(vm.query)
            .then(function(data) {

              // Copy data from the service into the model
              vm.City = data.City;
              vm.Condition = data.Condition;
              vm.Description = data.Description;
              vm.IconUrl = data.IconUrl;
              vm.Temperatures = data.Temperatures;
              vm.Wind = data.Wind;
              vm.Gusts = data.Gusts;
              vm.Humidity = data.Humidity;

              // If we got this far, we have good data
              vm.ValidDataLoaded = true;

            })

          .catch (function(message) {
  
              vm.error = message;
              vm.ValidDataLoaded = false;
  
            });

        }; // End Search()
      }
    ]); // End Controller()
}()); // End IFFE