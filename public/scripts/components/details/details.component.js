//component for flight details
class DetailsCtrl {
    constructor(communication, dataFactory) {
        'ngInject';
        this.communication = communication;
        this.dataFactory = dataFactory;
    }

    $onInit() {
      this.communication.registerCallbackFunc(["searchChange"], this.refreshModuleBlock())
      this.flightList = this.dataFactory.dataFeed(); // get the list of flights
      this.flightListToDisplay = this.returnFlights=[];
    }

    //FUNCTION to listen any event has occured which is registered by the current component and
    //perform action accordingly
    refreshModuleBlock(){
      let self = this;
      return (eventName, value)=>{
        if(eventName == "searchChange"){
          self.flightListToDisplay = self.returnFlights=[];
          self.details = value;
          self.filterList(value);
        }
      }
    }

    // FUNCTION to filter the filterList based on given search parameters
    // flightListToDisplay is for displaying the forward flights
    // match all the given parameters with each of the element in filterList to get flightListToDisplay
    // returnFlights is for displaying the return flights available
    // interchange the origin and destination cities and match the parameters to get returnFlights
    filterList(){
      let self = this;
      this.flightListToDisplay = this.flightList.filter((filter)=>{
        if(self.details.origin_city.toLowerCase() == filter.origin_city.toLowerCase()
          && self.details.destination_city.toLowerCase() == filter.destination_city.toLowerCase()
          && self.details.departure_date == filter.departure_date
          && filter.price <= self.details.end_price && filter.price >= self.details.start_price
          && self.details.seats_required <= filter.available_seats) return true;
      })
      if(self.details.return_date){
        this.returnFlights = this.flightList.filter((filter)=>{
          if(self.details.destination_city.toLowerCase() == filter.origin_city.toLowerCase()
            && self.details.origin_city.toLowerCase() == filter.destination_city.toLowerCase()
            && self.details.return_date == filter.departure_date
            && filter.price <= self.details.end_price && filter.price >= self.details.start_price
            && self.details.seats_required <= filter.available_seats) return true;
        })
      }
    }

    // the component should get removed from the communication list once it is no longer present in DOM
    $onDestroy(){
      this.communication.unRegister(this.subscriberName);
    }
}


let detailsComponent = {
    bindings: {
      subscriberName:'@'
    },
    templateUrl: './scripts/components/details/details.html',
    controller: DetailsCtrl,
    controllerAs: 'details'
}

export default detailsComponent;
