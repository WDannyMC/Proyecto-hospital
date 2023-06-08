const formulario = document.getElementById("registro-pacientes-form")
const nombrePaciente = document.getElementById("paciente")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const objetoPaciente = {
        Paciente: nombrePaciente.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edadPaciente.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})