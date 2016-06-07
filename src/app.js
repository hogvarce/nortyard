const App = {
    headers: [],
    getData: () => {
        App.headers = [];
        $('.table.active thead tr th').each(function(){
            App.headers.push($(this).text());
        });
        $('.modal-body > form').html('');
        for(let header in App.headers) {
            $('.modal-body > form').append('<label for="'+App.headers[header]+'">'+App.headers[header]+'</label><input type="text" name="'+App.headers[header]+'"><br>');
        }
    }
};

export default App;
