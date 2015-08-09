class MainController {
  constructor($http) {
    'ngInject';

    $http.get('/assets/data.json').
      then((response)=> {
        this.data = response.data;
      });
  }
}

export default MainController;
