/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

import axios from 'axios';

const productList = document.getElementById('product-list')

axios.get("http://localhost:3031/api/productos") // acá con axios hacemos el get a la ruta correspondiente (recorda importar axios en tu index.html)
.then((products)=>{
const table = products.data.map((res)=>
`<div class ='table-responsive'>
<table class='table table-dark'>
  <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Foto</th>
  </tr>
  <tr>
    <td>${res.title}</td>
    <td>$${res.price}</td>
    <td>
      <img
      width='50'
      src=${res.image}
      alt='Image not found'/>
    </td>
  </tr>
</table>
</div>`
  )
  productList.innerHTML = `<div>${table}</div>`
})
