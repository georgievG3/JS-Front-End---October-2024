document.addEventListener('DOMContentLoaded', solve);

function solve() {
   
   const formEl = document.querySelector("#task-input")
   const contentEl = document.querySelector("#content")


   formEl.addEventListener('submit', (e) =>{

      e.preventDefault()

      const sectionEl = formEl.querySelector("input[type='text']").value.split(", ")
      
      sectionEl.forEach(el => {
         
         const divEl = document.createElement('div')
         const newPEl = document.createElement('p')

         newPEl.textContent = el
         newPEl.style.display = 'none'

         divEl.append(newPEl)
         divEl.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block'
         })
         contentEl.append(divEl)

      });
   })
}