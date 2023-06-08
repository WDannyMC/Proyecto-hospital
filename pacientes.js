function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla =tablaPacientes.getElementsByClassName("tbody")[0]

    pacientes.forEach(pacientes => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.paciente
        const celdaApellidoPaciente = fila.insertCell();
        celdaApellidoPaciente.textContent= paciente.apellido
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=pacientes.cedula 
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=pacientes.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=pacientes.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=pacientes.celdaEspecialidad
    
    })
}
mostrarPacientes()