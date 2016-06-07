import App from './app.js';

$(document).ready(function(){
    $('#tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });

    $('#myModal').on('show.bs.modal', function (e) {
        App.getData();
    });
});
