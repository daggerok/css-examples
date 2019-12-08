(function () {
    document.addEventListener('DOMContentLoaded', function (event) {
        fetch('messages')
            .catch(err => console.log('oops', err))
            .then(data => data.json() || data.text())
            .then(console.log)
    }, false);
})();
