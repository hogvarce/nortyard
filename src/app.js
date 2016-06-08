const storage = $.localStorage;

const App = {
    headers: [],
    promise: new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("result");
        }, 1500);
    }),
    renderList: (tab) => {
        let list = storage.get(tab) || [];
        $('.table.active tbody').html('');
        for (let tr in list) {
            let html = '<tr>';
            for (let td in list[tr].data) {
                html += '<td>'+list[tr].data[td].value+'</td>';
            }
            html += '<td><button class="edit btn btn-primary">Редактировать</button> <button class="remove btn btn-danger">Удалить</button></td></tr>'
            $('.table.active tbody').append(html);
        }
    },
    getHeaders: (modal) => {
        App.headers = [];
        $('.table.active thead tr th').each(function(){
            App.headers.push($(this).text());
        });
        $(modal).find('.modal-body > form').html('');
        for(let header in App.headers) {
            $(modal).find('.modal-body > form').append('<div class="form-group"><label for="'+App.headers[header]+'">'+App.headers[header]+'</label><input class="form-control" type="text" name="'+App.headers[header]+'"></div>');
        }
    },
    writeData: () => {
        let form = $('#myModal .modal-body > form');
        let data = [];
        let html = '<tr>';
        form.find('input').each(function(){
            data.push({name: $(this).attr('name'), value: $(this).val()});
            html += '<td>'+$(this).val()+'</td>'
        });
        html += '<td><button class="edit btn btn-primary">Редактировать</button> <button class="remove btn btn-danger">Удалить</button></td></tr>'
        App.promise
          .then(
            result => {
                $('.table.active tbody').append(html);
                App.saveData(data);
                $.jGrowl("Запись добавлена", {position: 'bottom-right'});
            },
            error => {
                $.jGrowl("Ошибка записи", {position: 'bottom-right'});
            }
          );
    },
    deleteData: (el) => {
        if (confirm("Одумайся, глупец!.. Все-таки удалять?")){
            let deleted = $(el).parent().parent();
            let inx = deleted.index();
            deleted.remove();
            $.jGrowl("Запись удалена", {position: 'bottom-right'});
            let header = $('#tabs .active a').text();
            let list = storage.get(header) || [];
            list.splice(inx, 1);
            storage.set(header, list);
        }
    },
    saveData: (data) => {
        let header = $('#tabs .active a').text();
        let list = storage.get(header) || [];
        list.push({data});
        storage.set(header, list);
    },
    itemEdit: '',
    editData: (data) => {
        let header = $('#tabs .active a').text();
        App.itemEdit = $(data).parent().parent().index();
        let list = storage.get(header) || [];
        let item = list[App.itemEdit];
        App.getHeaders('#editModal');
        $('#editModal').modal('show');
        $('#editModal .modal-body input').each(function(e){
            $(this).val(item.data[e].value);
        });
    },
    saveEditData: () => {
        let data = [];
        let header = $('#tabs .active a').text();
        let form = $('#editModal .modal-body > form');
        let html = '';
        form.find('input').each(function(){
            data.push({name: $(this).attr('name'), value: $(this).val()});
            html += '<td>'+$(this).val()+'</td>'
        });
        html += '<td><button class="edit btn btn-primary">Редактировать</button> <button class="remove btn btn-danger">Удалить</button></td>'
        let list = storage.get(header) || [];
        list.splice(App.itemEdit, 1, {data});
        storage.set(header, list);
        App.promise
          .then(
            result => {
                $('.table.active tbody tr').eq(App.itemEdit).html(html);
                $.jGrowl("Запись изменена", {position: 'bottom-right'});
            },
            error => {
                $.jGrowl("Ошибка записи", {position: 'bottom-right'});
            }
          );
    }
};

export default App;
