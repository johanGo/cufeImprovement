const button= document.querySelector('input');
const ul=document.querySelector("ul");
button.textContent='TEXTO';

button.addEventListener('change', (e)=>{
    e.preventDefault();

      let archivo=e.target.files[0];
      const lector = new FileReader();
      lector.readAsText(archivo);
      
      lector.onload=(eventoLector)=>{
        let contenidoXml=eventoLector.target.result;

        //1 Expresión regular para extraer el CUFE
			const tagCUFE = 'cbc:UUID';
			const regexCUFE = new RegExp(`<${tagCUFE}\\b[^>]*>(.*?)<\\/\\s*${tagCUFE}\\s*>`, 's');	
	
        //2 Expresion regular para extraer el nombre del proveedor
        const tagName= 'cbc:RegistrationName';
        const regexName=new RegExp(`<${tagName}\\b[^>]*>(.*?)<\\/\\s*${tagName}\\s*>`, 's');
            
        //1 Buscar el CUFE en el contenido del archivo XML
        const resultadoCUFE = regexCUFE.exec(contenidoXml);
  
        //2 Buscar el Nombre del proveedor en el contenido XML
        const resultadoName= regexName.exec(contenidoXml);

        if (resultadoCUFE !== null && resultadoName!== null) {
				console.log(`EL CUFE ES: ${resultadoCUFE[1]}`);
				console.log(`El nombre del proovedor es: ${resultadoName[1]}`)
				// nameProvider.innerHTML=resultadoName[1];
				// cufeProvider.innerHTML=resultadoCUFE[1];
        } else {
          console.log(`No se encontró el valor dentro del elemento ${tagCUFE}`);
          console.log(`No se encontró el valor dentro del elemento ${tagName}`);
        }	
      }
      




    let li = document.createElement('li');
    let nameProvider= document.createElement('p');
    let numberCufe= document.createElement('p');

    nameProvider.setAttribute('id','nameProvider');
    numberCufe.setAttribute('id','numberCufe');


    li.appendChild(nameProvider);
    nameProvider.innerText='MEALS DE COLOMBIA S.A.S';
    li.appendChild(numberCufe);
    numberCufe.innerText='9cbe444d0642c561cadd082152ba065d8ba92d1ba391c8b75bcda2b0e154d53fad6f4efdd936e5469fa474c0e4807eea';
    
    li.appendChild(copyCufe());
    li.appendChild(deleteRows());
    ul.appendChild(li);
});

function deleteRows(){
  const deleteButton = document.createElement("img");
  deleteButton.className="img-delete";
  deleteButton.setAttribute('src','imgs/clear_black_24dp.svg')
  deleteButton.addEventListener('click',(e)=>{
    let parentElement=e.target.parentElement;
    parentElement.remove();
  })
  return deleteButton;  
}

function copyCufe(){
  let iconCopy= document.createElement('img');
  iconCopy.className='img-copy';
  iconCopy.setAttribute('src','imgs/clipboard.svg');

  return iconCopy;
}

function suu(evento){
	const archivo = evento.target.files[0];
		const lector = new FileReader();
		lector.readAsText(archivo);

				
    lector.onload = (eventoLector) => {
			console.log(eventoLector)
			const contenidoXML = eventoLector.target.result;
	
			//1 Expresión regular para extraer el CUFE
			const tagCUFE = 'cbc:UUID';
			const regexCUFE = new RegExp(`<${tagCUFE}\\b[^>]*>(.*?)<\\/\\s*${tagCUFE}\\s*>`, 's');	
	
			//2 Expresion regular para extraer el nombre del proveedor
			const tagName= 'cbc:RegistrationName';
			const regexName=new RegExp(`<${tagName}\\b[^>]*>(.*?)<\\/\\s*${tagName}\\s*>`, 's');
					
			//1 Buscar el CUFE en el contenido del archivo XML
			const resultadoCUFE = regexCUFE.exec(contenidoXML);
	
			//2 Buscar el Nombre del proveedor en el contenido XML
			const resultadoName= regexName.exec(contenidoXML);
					
			if (resultadoCUFE !== null && resultadoName!== null) {
				// console.log(`EL CUFE ES: ${resultadoCUFE[1]}`);
				// console.log(`El nombre del proovedor es: ${resultadoName[1]}`)
				nameProvider.innerHTML=resultadoName[1];
				cufeProvider.innerHTML=resultadoCUFE[1];
			} else {
				// console.log(`No se encontró el valor dentro del elemento ${tagCUFE}`);
				// console.log(`No se encontró el valor dentro del elemento ${tagName}`);
			}				
			
			verify();
						
		};
}