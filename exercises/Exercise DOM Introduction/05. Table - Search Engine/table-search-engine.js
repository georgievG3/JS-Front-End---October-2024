function solve() {
   const tableRows = document.querySelectorAll('tbody tr');
   const inputField = document.getElementById('searchField');
   const searchText = inputField.value.trim().toLowerCase();

   tableRows.forEach(row => row.classList.remove('select'));

   if (!searchText) {
       inputField.value = "";
       return;
   }

   for (const row of tableRows) {
       let rowMatches = false;

       for (const cell of row.cells) {
           if (cell.textContent.toLowerCase().includes(searchText)) {
               rowMatches = true;
               break;
           }
       }

       if (rowMatches) {
           row.classList.add('select');
       }
   }

   inputField.value = "";
}