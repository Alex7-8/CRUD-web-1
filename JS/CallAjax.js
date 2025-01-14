llamadaDemo();

function Editar(id, nombre, apellido, mensaje){
    //alert(id);
    //https://getbootstrap.com/docs/5.0/components/modal/#options
    document.getElementById("txtIDU").value = id;
    document.getElementById("txtNombreU").value = nombre;
    document.getElementById("txtApellidoU").value = apellido;
    document.getElementById("txtMensajeU").value = mensaje;

    var myModal = new bootstrap.Modal(document.getElementById('exampleModalEditar'), {
        keyboard: false
      })
    
    myModal.show()
}

function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

    fetch('PHP/LeerMsgUsuarios.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var tbodyUser = document.getElementById('tbodyUser');
            tbodyUser.innerHTML = '';
            if (data.status == "200") {
                //alert(data.status );
                for (let index = 0; index < data.message.length; index++) {
                    //alert(data.message[index].nombre);
                    const row = document.createElement("tr");
                    row.setAttribute("id", data.message[index].id);
                    row.setAttribute("onclick", "Editar('" + data.message[index].id + "','" +  data.message[index].nombre + "','" +  data.message[index].apellido + "','" +  data.message[index].mensaje + "');");


                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(data.message[index].id);
                    cell.appendChild(cellText);
                    row.appendChild(cell);

                    const cell1 = document.createElement("td");
                    const cellText1 = document.createTextNode(data.message[index].nombre);
                    cell1.appendChild(cellText1);
                    row.appendChild(cell1);

                    const cell2 = document.createElement("td");
                    const cellText2 = document.createTextNode(data.message[index].apellido);
                    cell2.appendChild(cellText2);
                    row.appendChild(cell2);

                    const cell3 = document.createElement("td");
                    const cellText3 = document.createTextNode(data.message[index].mensaje);
                    cell3.appendChild(cellText3);
                    row.appendChild(cell3);

                    const cell4 = document.createElement("td");
                    const cellText4 = document.createTextNode(data.message[index].fecha);
                    cell4.appendChild(cellText4);
                    row.appendChild(cell4);

                    tbodyUser.appendChild(row);
                }
            }

        });

}
function ActualizarDatos() {
    var vnombre = document.getElementById("txtNombreU").value
    var vapellido = document.getElementById("txtApellidoU").value
    var vmensaje = document.getElementById("txtMensajeU").value
    
    if(vnombre == "" || vapellido == "" || vmensaje == ""){
        //alert("complete los campos requeridos");
        Swal.fire({
            title: 'Error!',
            text: 'complete los campos requeridos',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    else{

    }
}
function GuardarDatos() {
    //alert('Guardando Datos');
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#enviando_datos_json
    //https://www.w3schools.com/jsref/prop_text_value.asp
    var url = 'PHP/IngresarRegistro.php';
    var vnombre = document.getElementById("txtNombre").value
    var vapellido = document.getElementById("txtApellido").value
    var vmensaje = document.getElementById("txtMensaje").value
    if(vnombre == "" || vapellido == "" || vmensaje == ""){
        alert("complete los campos requeridos");
    }
    else{
        var data = { nombre: vnombre, apellido: vapellido, mensaje: vmensaje };

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => {
                alert(error.message)
                console.error('Error:', error)
            })
            .then(response => {
                document.getElementById("txtNombre").value = '';
                document.getElementById("txtApellido").value = '';
                document.getElementById("txtMensaje").value = '';
                llamadaDemo();
                Swal.fire(
                    'Good job!',
                    response.message,
                    'success'
                  )
                //alert(response.message)
                console.log('Success:', response)
            });
        
    }
    

}


