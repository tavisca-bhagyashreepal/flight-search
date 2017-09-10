// dummy data for flights
const data = [
              {
                flight_id: 'A1801',
                origin_city: 'Pune',
                origin_city_code: 'PNQ',
                destination_city:'Delhi',
                destination_city_code: 'DEL',
                departure_time: '10:00 AM',
                arrival_time: '2:00 PM',
                departure_date: '12/09/2017',
                price: 7000,
                available_seats: 10
              },
              {
                flight_id: 'A1803',
                origin_city: 'Pune',
                origin_city_code: 'PNQ',
                destination_city:'Lucknow',
                destination_city_code: 'LCK',
                departure_time: '09:00 AM',
                arrival_time: '11:00 PM',
                departure_date: '12/09/2017',
                price: 6000,
                available_seats: 15
              },
              {
                flight_id: 'A1802',
                origin_city: 'Delhi',
                origin_city_code: 'DEL',
                destination_city:'Pune',
                destination_city_code: 'PNQ',
                departure_time: '10:00 AM',
                arrival_time: '2:00 PM',
                departure_date: '13/09/2017',
                price: 3000,
                available_seats: 8
              },
              {
                flight_id: 'A1805',
                origin_city: 'Delhi',
                origin_city_code: 'DEL',
                destination_city:'Pune',
                destination_city_code: 'PNQ',
                departure_time: '11:00 AM',
                arrival_time: '2:00 PM',
                departure_date: '13/09/2017',
                price: 5000,
                available_seats: 6
              },
              {
                flight_id: 'A1804',
                origin_city: 'Lucknow',
                origin_city_code: 'LCK',
                destination_city:'Pune',
                destination_city_code: 'PNQ',
                departure_time: '09:00 AM',
                arrival_time: '11:00 PM',
                departure_date: '13/09/2017',
                price: 6000,
                available_seats: 5
              }];

// Factory for getting data
export default class dataFactory {
    constructor() {
      'ngInject';
    }

    dataFeed(){
      return data;
    }

    static dataFactoryFunctions () {
        'ngInject';
        return new dataFactory();
    }
}
