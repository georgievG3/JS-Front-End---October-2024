function solve() {
  
  let text = (document.querySelector("#text").value.toLowerCase()).split(" ")
  let convention = document.querySelector('#naming-convention').value 
  let result = document.querySelector('#result') 

  if (convention == "Pascal Case"){
    const pascalResult = (text.reduce((a, b) =>{
      return (a.charAt(0).toUpperCase() + a.slice(1)) + '' + (b.charAt(0).toUpperCase() + b.slice(1));
  }
  ))
  result.innerHTML = pascalResult
  } else if (convention == "Camel Case"){
    const camelResult = (text.reduce((a, b) =>{
      return (a.charAt(0).toUpperCase() + a.slice(1)) + '' + (b.charAt(0).toUpperCase() + b.slice(1));
    }))
    result.innerHTML = camelResult.charAt(0).toLowerCase() + camelResult.slice(1)
  } else {
    result.innerHTML = "Error!"
  }
}