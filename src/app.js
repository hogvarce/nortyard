const App = {
    headers: [],
    getHeaders: () => {
        App.headers = [];
        $('.table.active thead tr th').each(function(){
            App.headers.push($(this).text());
        });
        $('.modal-body > form').html('');
        for(let header in App.headers) {
            $('.modal-body > form').append('<div class="form-group"><label for="'+App.headers[header]+'">'+App.headers[header]+'</label><input class="form-control" type="text" name="'+App.headers[header]+'"></div>');
        }
    },
    writeData: () => {
        let form = $('.modal-body > form');
        let data = [];
        let html = '<tr>';
        form.find('input').each(function(){
            data.push({name: $(this).attr('name'), value: $(this).val()});
            html += '<td>'+$(this).val()+'</td>'
        });
        html += '<td><button class="edit btn btn-primary">Редактировать</button> <button class="remove btn btn-danger">Удалить</button></td></tr>'
        $('.table.active tbody').append(html);
    },
    deleteData: (el) => {
        $(el).parent().parent().remove();
    }
};

export default App;
