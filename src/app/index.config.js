function config ($mdThemingProvider, $logProvider, toastr) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastr.options.timeOut = 3000;
  toastr.options.positionClass = 'toast-top-right';
  toastr.options.preventDuplicates = true;
  toastr.options.progressBar = true;

  $mdThemingProvider.theme('default')
    // .primaryPalette('red')
    .primaryPalette('yellow')
    // .primaryPalette('orange')
    // .primaryPalette('amber')
    .accentPalette('red');
}

export default config;
