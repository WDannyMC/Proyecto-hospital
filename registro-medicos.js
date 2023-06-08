const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const numeroConsultorio = document.getElementById("consultorio")
const especialidad = document.getElementById("especialidad")
const formularioRgistro =document.getElementById("registro-medicos-form")
formularioRgistro.addEventListener("submit", function(event){
    event.preventDefault
    const medico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: consultorio.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formularioRegistro.reset()
    alert("Medico registrado con exito")
})
