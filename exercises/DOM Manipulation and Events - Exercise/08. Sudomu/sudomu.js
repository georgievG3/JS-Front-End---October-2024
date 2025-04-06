document.addEventListener('DOMContentLoaded', solve);

function solve() {

    let status = ''
    let size = 3
    
    const formEl = document.querySelector('#solutionCheck')
    const outputEl = document.querySelector('#check')

    formEl.addEventListener('submit', e => {
        e.preventDefault()

        const rows = e.target.querySelectorAll('table tbody tr')

        rows.forEach(row => {
            const values = [...row.children].map(el => el.children[0].value)
            const duplicates = values.filter((item, index) => values.indexOf(item) !== index)

            if ( duplicates.length > 0) {
                status += 0
            }else {
                status += '1'
            }
        });

        status += "X"

        for (let i = 1; i <= size; i++){
            const column = [...e.target.querySelectorAll(` table tbody tr td:nth-child(${i})`)].map(el => el.children[0].value)
            const duplicates = column.filter((item, index) => column.indexOf(item) !== index)

            if ( duplicates.length > 0) {
                status += 0
            }else {
                status += '1'
            }
        }

        if (status === '111X111') {
            outputEl.classList.remove('fail')
            outputEl.classList.add('success')
            outputEl.textContent = "Success!"
            return
        }else{
            outputEl.classList.add('fail')
            outputEl.classList.remove('success')
            outputEl.textContent = "Keep trying ..."
        }
    })
}