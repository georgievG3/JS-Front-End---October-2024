document.addEventListener('DOMContentLoaded', solve);

function solve() {

    document.querySelector('main').addEventListener('click', e =>{

        const values = {km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254}

        if ( e.target.id !== "convert") return

        const inputDistance = document.querySelector('#inputDistance').value
        const inputUnits = document.querySelector('#inputUnits').value
        const outputUnits = document.querySelector('#outputUnits').value
        const outputDistance = document.querySelector('#outputDistance')

        
        const meters = inputDistance * values[inputUnits]
        const result = meters / values[outputUnits]

        outputDistance.disabled = false
        outputDistance.value = result
        
    })
}