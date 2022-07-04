

    const nombre = document.getElementById('inputNombre')
    
    const apellido = document.getElementById('inputApellido')

    const email = document.getElementById('inputEmail')

    const cantidadEntradas = document.getElementById('cantidadEntrada')

    const botonBorrar = document.getElementById('botonBorrar')
    
    const botonCalcular = document.getElementById('botonCalcular')

    const categoria = document.getElementById('inputState')

    const totalCompra = document.getElementById('totalCompra')



function resumen() {
    console.log(categoria.value)

    console.log(cantidadEntradas.value)

    cantidadEntradas.value

    if(categoria.value=="estudiante"){
        totalCompra.innerHTML= cantidadEntradas.value*(200-(200*0.80))

    }else{
        
        if(categoria.value=="trainee"){
            totalCompra.innerHTML= cantidadEntradas.value*(200-(200*0.50))

        }else {
            totalCompra.innerHTML= cantidadEntradas.value*(200-(200*0.15))
        }
    }
}

