function deleteByEmail() {

    let email = document.querySelector('label input').value
    let result = document.querySelector('#result')
    let rows = document.querySelectorAll('tbody tr td:nth-of-type(2)')

    for (const row of rows) {

        if (email === row.textContent){

            let rowEmail = row.parentNode;
            rowEmail.parentNode.removeChild(rowEmail);

            result.textContent = 'Deleted.'

            document.querySelector('label input').value = ''
            return
        }

        document.getElementById('result').textContent = "Not found.";
        
    }

    document.querySelector('label input').value = ''

    
}
