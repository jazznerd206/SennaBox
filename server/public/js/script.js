console.log('script')

const button = document.getElementById('get-reading');
button.addEventListener('click', function() {
    axios.get('/api/box')
        .then(response => {
            console.log(response.data);
            let el = document.getElementById('reading');
            el.innerHTML = response.data;
        })
        .catch(error => {
            console.log(error)
        })
})