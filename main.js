
let menu = () => {
    let opcion = prompt(`Por favor, ingrese la opción que desea seleccionar. \n \n-Escriba 1 para ingresar un nuevo empleado.\n-Escriba 2 para buscar un empleado por número de cédula.\n-Escriba 3 para mostrar el listado de los empleados.\n-Escriba 4 para salir del menú.`);
    return opcion;
}

let grupoEmpleados = [];


let ingresarTrabajador = () => {
    let = empleado = [];
    empleado[0] = Number(prompt(`Por favor, ingrese el documento del trabajador`));
    empleado[1] = prompt(`Por favor, ingrese el nombre del empleado`);
    empleado[2] = prompt(`Por favor, ingrese el cargo que tiene el empleado`);
    empleado[3] = parseFloat(prompt(`Por favor, ingrese el valor hora de su empleado`))
    empleado[4] = parseFloat(prompt(`Por favor ingrese la cantidad de horas trabajadas por su empleado`));
    grupoEmpleados.push(empleado);
}

let buscarEmpleado = () => {
    let cedula = Number(prompt(`Por favor, ingrese el numero de documento que desea buscar`));
    let control = true;

    for (let i = 0; i < grupoEmpleados.length; i++) {
        if (control && grupoEmpleados[i][0] === cedula) {
            alert(`El nombre del empleado es ${grupoEmpleados[i][1]}\nEl cargo del empleado es ${grupoEmpleados[i][2]}\nEl salario del trabajador es ${grupoEmpleados[i][3] * grupoEmpleados[i][4]}`)
            control = false;
        }
    }

    if (control) {
        alert('El documento no esta en nuestra base de datos.');
    }
}

let mostrarEmpleados = () => {
    alert(`El listado de los empleados es:`)
    for (let j = 0; j < grupoEmpleados.length; j++) {
        alert(`El nombre del trabajador es ${grupoEmpleados[j][1]}\nEl cargo del trabajador es ${grupoEmpleados[j][2]}\nEl salario del trabajador es ${(grupoEmpleados[j][3] * grupoEmpleados[j][4])}`)
    }
}


let repetir = true;

while (repetir) {
    switch (+menu()) {

        case 1:
            ingresarTrabajador();

            while (repetir) {
                let nuevoTrabajador = prompt(`¿Desea ingresar otro empleado\n Escriba 1 para indicar "Sí" \n Escriba 2 para indicar "No"`);
                switch (nuevoTrabajador) {

                    case `1`:
                        ingresarTrabajador();

                        break;


                    case `2`:
                        repetir = false;
                        break;
                }
            }
            repetir = true;
            break;

        case 2:
            buscarEmpleado();

            break;

        case 3:
            mostrarEmpleados();
            break;

        case 4:
            repetir = false;

            break;

        default:
            alert(`La opción ingresada no es correcta`)

            break;
    }

}









