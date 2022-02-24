
let fecha=new Date();
const contenedorFecha=document.getElementById('contFecha');
    
contenedorFecha.innerHTML=`${fecha.getDate()} / ${fecha.getMonth()} / ${fecha.getFullYear()} <br/>`;
    
    const button=document.getElementById('button');
    
    button.addEventListener('click',()=>{
    
        let xhr= new XMLHttpRequest();
    
        xhr.open('GET', 'https://disease.sh/v3/covid-19/countries/argentina');
    
        xhr.addEventListener('load',(data)=>{
            let dataJSON=JSON.parse(data.target.response);
    
            console.log(dataJSON)
            
            let encabezado=document.getElementById('encabezado');
            let imagen=document.getElementById('imagenbandera');
    
    
            encabezado.innerHTML+=`${dataJSON.country}  <br>`
            imagen.src=`${dataJSON.countryInfo.flag}`;
            //parrafo.innerHTML+=`Muertes hoy ${dataJSON.todayDeaths}`
    
            const lista=document.getElementById('lista');
             let listItem=document.createElement('li');
             let listItem2=document.createElement('li');
             let listItem3=document.createElement('li');
    
                listItem.textContent=` Casos positivos hoy: ${dataJSON.todayCases}`;
                lista.appendChild(listItem)
    
                listItem3.textContent=` Casos recuperados hoy: ${dataJSON.todayRecovered}`;
                lista.appendChild(listItem3)
    
    
                listItem2.textContent=` Muertes hoy: ${dataJSON.todayDeaths}`;
                lista.appendChild(listItem2)
            
            
        })
    
    
        xhr.send();
    })
