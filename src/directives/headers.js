export default ngModule => {
    ngModule.directive('headers', headers);
     function headers() {
       return {
          restrict: 'E',
          compile: function(element, attributes){
              let headers = element.text().split(', ');
              let html = '<ul class="list-inline">'
              for (let h in headers) {
                  html += '<li>'+headers[h]+'</li>'
              }
              html += '</ul>';
              element.html(html);
          }
       }
     }
}
