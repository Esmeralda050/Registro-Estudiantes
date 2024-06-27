document.addEventListener('DOMContentLoaded', function () {
    const modalAgregar = document.getElementById('modalAgregarEstudiante');
    const btnAbrirModalAgregar = document.getElementById('registro-modal');
    const btnCerrarModalAgregar = document.getElementById('cerrarModal');
    const formAgregar = document.getElementById('formularioAgregarEstudiante');
    const modalEliminar = document.getElementById('modalEliminarEstudiante');
    const btnCerrarModalEliminar = document.querySelector('#modalEliminarEstudiante .cerrar-modal');
    const modalEditar = document.getElementById('modalEditarEstudiante');
    const btnCerrarModalEditar = document.querySelector('#modalEditarEstudiante .cerrar-modal');

    btnAbrirModalAgregar.addEventListener('click', () => {
        modalAgregar.style.display = 'block';
    });

    btnCerrarModalAgregar.addEventListener('click', () => {
        modalAgregar.style.display = 'none';
    });

    formAgregar.addEventListener('submit', (e) => {
        e.preventDefault();
        agregarAlumno();
    });

    btnCerrarModalEliminar.addEventListener('click', () => {
        modalEliminar.style.display = 'none';
    });

    btnCerrarModalEditar.addEventListener('click', () => {
        modalEditar.style.display = 'none';
    });

    function agregarAlumno() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const matricula = document.getElementById('matricula').value;
        const materia = document.getElementById('materia').value;
        const nota = document.getElementById('nota').value;

        const tabla = document.getElementById('tabAlumnos').getElementsByTagName('tbody')[0];
        const newRow = tabla.insertRow();

        const celdaNombre = newRow.insertCell(0);
        const celdaApellido = newRow.insertCell(1);
        const celdaMatricula = newRow.insertCell(2);
        const celdaMateria = newRow.insertCell(3);
        const celdaNota = newRow.insertCell(4);
        const celdaAcciones = newRow.insertCell(5);

        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        celdaMatricula.textContent = matricula;
        celdaMateria.textContent = materia;
        celdaNota.textContent = nota;
        celdaAcciones.innerHTML = `
            <button class="btn" onclick="editarAlumno(this)">Editar</button>
            <button class="btn" onclick="eliminarAlumno(this)">Eliminar</button>
        `;

        formAgregar.reset();
        modalAgregar.style.display = 'none';
    }

    window.editarAlumno = function (button) {
        const row = button.parentNode.parentNode;
        const cells = row.getElementsByTagName('td');

        document.getElementById('nombreEdit').value = cells[0].textContent;
        document.getElementById('apellidoEdit').value = cells[1].textContent;
        document.getElementById('matriculaEdit').value = cells[2].textContent;
        document.getElementById('materiaEdit').value = cells[3].textContent;
        document.getElementById('notaEdit').value = cells[4].textContent;

        modalEditar.style.display = 'block';

        const formEditar = document.getElementById('formularioEditarEstudiante');
        formEditar.onsubmit = function (e) {
            e.preventDefault();

            cells[0].textContent = document.getElementById('nombreEdit').value;
            cells[1].textContent = document.getElementById('apellidoEdit').value;
            cells[2].textContent = document.getElementById('matriculaEdit').value;
            cells[3].textContent = document.getElementById('materiaEdit').value;
            cells[4].textContent = document.getElementById('notaEdit').value;

            modalEditar.style.display = 'none';
        };
    }

    window.eliminarAlumno = function (button) {
        const row = button.parentNode.parentNode;
        modalEliminar.style.display = 'block';

        const confirmarEliminarAlumno = document.querySelector('#modalEliminarEstudiante .btn');
        confirmarEliminarAlumno.onclick = function () {
            row.remove();
            modalEliminar.style.display = 'none';
        };
    }

    window.cerrarModalEliminar = function () {
        modalEliminar.style.display = 'none';
    }

    window.cerrarModalEditar = function () {
        modalEditar.style.display = 'none';
    }

    window.buscarAlumnos = function () {
        const input = document.getElementById('input__buscar').value.toLowerCase();
        const rows = document.getElementById('tabAlumnos').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            let match = false;

            for (let j = 0; j < cells.length - 1; j++) {
                if (cells[j].textContent.toLowerCase().includes(input)) {
                    match = true;
                    break;
                }
            }

            if (match) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});


