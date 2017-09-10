class HomeCtrl {
    constructor(communication) {
        'ngInject';
        this.communication = communication;
    }

    $onInit() {
      this.communication.registerCallbackFunc([], this.refreshModuleBlock()); // register any event which should be listened by this component
    }

    refreshModuleBlock(){
      let self = this;
      return(eventName, value)=>{

      }
    }

    // the component should get removed from the communication list once it is no longer present in DOM
    $onDesstroy(){
      this.communication.unRegister(this.subscriberName);
    }
}


let homeObj = {
    bindings: {
      subscriberName: '@'
    },
    templateUrl: './scripts/components/home/home.html',
    controller: HomeCtrl,
    controllerAs: 'home'
}

export default homeObj;
