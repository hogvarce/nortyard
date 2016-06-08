import App from './app.js';

$(document).ready(() => {

    $.jGrowl("Привет!", {position: 'bottom-right'});

    App.renderList($('#tabs .active a').text());

    $('#tabs a').click((e) => {
      e.preventDefault();
      $(this).tab('show');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {;
         App.renderList($('#tabs .active a').text());
    });

    $('#myModal').on('show.bs.modal',(e) => {
        App.getHeaders('#myModal');
        App.changeTypeInput($(e.target));
    });

    $('#editModal').on('show.bs.modal',(e) => {
        App.changeTypeInput($(e.target));
    });

    $('#getWrite').on('click', () => {
        App.writeData();
    })

    $('#editWrite').on('click', () => {
        App.saveEditData();
    })

    $(document).on('click', 'button.remove', (e) => {
        App.deleteData(e.target);
    }).on('click', 'button.edit', (e) => {
        App.editData(e.target);
    });
});
