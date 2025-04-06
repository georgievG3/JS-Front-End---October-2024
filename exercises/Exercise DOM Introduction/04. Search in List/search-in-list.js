function solve() {

   let towns = document.querySelectorAll('li')
   let searchBox = document.getElementById('searchText').value
   let result = document.getElementById('result')

   let matches = 0

   
   for (const town of towns) {
      if (town.textContent.includes(searchBox)){
         town.style.fontWeight = "bold"
         town.style.textDecoration = 'underline'
         matches += 1
      }
   }

   result.textContent = `${matches} matches found`

}