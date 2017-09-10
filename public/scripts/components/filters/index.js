let filterModule = angular.module('app.filters', ['rzModule']);

// Controllers
import FiltersComponent from './filters.component';
filterModule.component('filtersComponent',FiltersComponent);

export default filterModule;
