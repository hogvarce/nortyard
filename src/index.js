import App from './app.js';

$(document).ready(() => {
    $('#tabs a').click((e) => {
      e.preventDefault();
      $(this).tab('show');
    });

    $('#myModal').on('show.bs.modal',(e) => {
        App.getHeaders();
    });

    $('#getWrite').on('click', () => {
        App.writeData();
    })

    $(document).on('click', 'button.remove', (e) => {
        App.deleteData(e.target);
    })
});
