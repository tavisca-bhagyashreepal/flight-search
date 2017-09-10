//component for left filters
class FiltersCtrl {
    constructor(communication) {
        'ngInject';
        this.communication = communication;
    }

    $onInit() {
      this.communication.registerCallbackFunc([""], this.refreshModuleBlock());
      //initial settings
      this.oneway =true;
      this.twoway = false;
      this.originCityFlag =false;
      this.destinationCityFlag = false;
      this.departureDateFlag = false;
      this.returnDateFlag = false;
      this.noOfPassengersFlag = false;
      this.slider = { // settings for price slider
        minValue: 1000,
        maxValue: 10000,
        options: {
          floor: 1000,
          ceil: 10000,
          step: 1000,
          showTicks: true,
          onEnd: ()=>{this.fetchResults()}
        }
      };
    }

    //FUNCTION to set variables for showing oneway or return view
    toggleViews(way){
      if(way == 'oneway'){
        this.oneway = true;
        this.twoway = false;
        this.returnDate="";
      }else{
        this.oneway = false;
        this.twoway = true;
      }
    }

    //FUNCTION that gets called once user click on search and raise a particular event
    // Also get called once value of price slider gets changed
    fetchResults(){
      this.originCityFlag = this.originCity ? false : true;
      this.destinationCityFlag = this.destinationCity ?false: true;
      this.departureDateFlag = this.departureDate ? false: true;
      this.returnDateFlag = (this.returnDate && this.twoway) || (!this.returnDate && this.oneway ) ? false: true;
      this.noOfPassengersFlag = this.noOfPassengers ? false: true;
      if(!this.originCityFlag && !this.destinationCityFlag && !this.departureDateFlag && !this.returnDateFlag && !this.noOfPassengersFlag){
        let searchObj ={
          origin_city : this.originCity,
          destination_city: this.destinationCity,
          departure_date: this.departureDate.toLocaleDateString(),
          return_date: this.returnDate ? this.returnDate.toLocaleDateString(): this.returnDate,
          seats_required:this.noOfPassengers,
          start_price: this.slider.minValue,
          end_price: this.slider.maxValue
        }
        this.communication.notifyChange("searchChange", searchObj)
      }

    }

    refreshModuleBlock(){
      let self = this;
      return (eventName, value)=>{

      }
    }

    // the component should get removed from the communication list once it is no longer present in DOM
    $onDestroy(){
      this.communication.unRegister(this.subscriberName);
    }
}


let filtersComponent = {
    bindings: {
      subscriberName:'@'
    },
    templateUrl: './scripts/components/filters/filters.html',
    controller: FiltersCtrl,
    controllerAs: 'filters'
}

export default filtersComponent;
