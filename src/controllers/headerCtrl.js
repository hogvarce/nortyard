module.exports = angular.module('Controllers')
.controller('HeadersCtrl', function ($scope, headers){
    this.headers = headers.getList();
})
