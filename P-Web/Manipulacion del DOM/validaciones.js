//Validación para el campo de matrícula

document.getElementById("matricula").addEventListener("input", function(event) {
    let matriculaInput = event.target;
    let matricula = matriculaInput.value.toString();

    // Eliminar guiones si el usuario los ha ingresado
    matricula = matricula.replace(/-/g, '');

    // Validar longitud mínima
    if (matricula.length < 8) {
        matriculaInput.setCustomValidity("La matrícula debe tener al menos 8 dígitos y no puede tener guiones.");
    } else {
        matriculaInput.setCustomValidity("");
    }
});

//Validaciones para el campo de nota

function validarNota(event) {
    const input = event.target;
    const value = input.value;

    if (!/^(\d{0,3}(\.\d{0,2})?)?$/.test(value)) {
        input.setCustomValidity('Solo se permiten 2 decimales luego del punto y 3 dígitos enteros');
    } else {
        input.setCustomValidity('');
    }
}

