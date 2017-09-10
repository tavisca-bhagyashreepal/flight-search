let detailsModule = angular.module('app.details', []);

// Controllers
import DetailsComponent from './details.component';
detailsModule.component('detailsComponent',DetailsComponent);

export default detailsModule;
