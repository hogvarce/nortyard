module.exports = angular.module('Services')
.service('headers', function(){
    let headers = [
        {
            title: 'Persone',
            link: '/'
        },
        {
            title: 'User',
            link: '/user'
        },
        {
            title: 'Position',
            link: '/position'
        },
        {
            title: 'Department',
            link: '/department'
        },
        {
            title: 'Company',
            link: '/company'
        }
    ];
    this.getList = function() {
        return headers;
    };
})
