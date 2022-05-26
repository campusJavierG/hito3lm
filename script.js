fetch('alumnos.json')
.then(datos=>datos.json())
.then(datos=>procesar(datos));

function procesar(datos){
let contenido = document.getElementById("tablaCalificaciones");
let contenidoMedia= document.getElementById("pintarMedia");
let contenidoBuscarAlumno=document.getElementById("buscarAlumno");
let tabla=`<table class="table table-striped  mt-5 ">
<thead>
    <tr>
        <th>Alumno</th>
        <th>Curso</th>
        <th>Lenguaje de marcas</th>
        <th>Programación</th>
        <th>FOL</th>
        <th>Bases de datos</th>
        <th>Entornos de desarrollo</th>
        <th>Sistemas informáticos</th>
        <th>Media</th>
    </tr>
</thead>
<tbody >`;
let alumnos= Object.keys(datos.alumnos).length;
let notas=[];
for(let i=0;i<alumnos;i++){
  notas.push(datos.alumnos[i].notas);
   
}


let media=notaMedia(notas,alumnos);
console.log(media)
for(let i=0;i<alumnos;i++){
    tabla +=`
    <tr>
    <td>${datos.alumnos[i].nombre}  ${datos.alumnos[i].apellido} </td>
    <td>${datos.alumnos[i].curso}  </td>
    <td>${datos.alumnos[i].notas.LM} ${notasTexto(datos.alumnos[i].notas.LM)}</td>
    <td>${datos.alumnos[i].notas.PR} ${notasTexto(datos.alumnos[i].notas.PR)}</td>
    <td>${datos.alumnos[i].notas.FOL} ${notasTexto(datos.alumnos[i].notas.FOL)}</td>
    <td>${datos.alumnos[i].notas.BD} ${notasTexto(datos.alumnos[i].notas.BD)}</td>
    <td>${datos.alumnos[i].notas.ED} ${notasTexto(datos.alumnos[i].notas.ED)}</td>
    <td>${datos.alumnos[i].notas.SI} ${notasTexto(datos.alumnos[i].notas.SI)}</td>
    <td>${media[i]+" ("+notasTexto(media[i])+")"}</td>


  </tr>
    `;
}
tabla+=` </tbody>
</table>`;

contenido.innerHTML=tabla;




let botonBuscarAlumno=document.getElementById("botonBuscarAlumno");


botonBuscarAlumno.addEventListener("click",()=>{
    let textoBuscarAlumno= document.getElementById("textoBuscarAlumno").value;
    let tabla=`
    <table class="table table-striped  mt-5 ">
    <thead>
        <tr>
            <th>Alumno</th>
            <th>Curso</th>
            <th>Lenguaje de marcas</th>
            <th>Programación</th>
            <th>FOL</th>
            <th>Bases de datos</th>
            <th>Entornos de desarrollo</th>
            <th>Sistemas informáticos</th>
            <th>Media</th>
        </tr>
    </thead>
    <tbody >
    `;
    for(let i=0;i<alumnos;i++){
        if(datos.alumnos[i].nombre==textoBuscarAlumno){
    
            tabla +=`
            <tr>
            <td>${datos.alumnos[i].nombre}  ${datos.alumnos[i].apellido} </td>
            <td>${datos.alumnos[i].curso}  </td>
            <td>${datos.alumnos[i].notas.LM} ${notasTexto(datos.alumnos[i].notas.LM)}</td>
            <td>${datos.alumnos[i].notas.PR} ${notasTexto(datos.alumnos[i].notas.PR)}</td>
            <td>${datos.alumnos[i].notas.FOL} ${notasTexto(datos.alumnos[i].notas.FOL)}</td>
            <td>${datos.alumnos[i].notas.BD} ${notasTexto(datos.alumnos[i].notas.BD)}</td>
            <td>${datos.alumnos[i].notas.ED} ${notasTexto(datos.alumnos[i].notas.ED)}</td>
            <td>${datos.alumnos[i].notas.SI} ${notasTexto(datos.alumnos[i].notas.SI)}</td>
            <td>${media[i]+" ("+notasTexto(media[i])+")"}</td>

        </tr>
            `;
        
        
        }
}
        tabla+=` </tbody>
                </table>`;
                contenidoBuscarAlumno.innerHTML= tabla;
});





}



function notasTexto(nota){
    if(nota<5 && nota>=0){
        return "insuficiente";
    }else if(nota<7){
        return "aprobado";
    }else if(nota <=9){
        return "notable";
    }else if(nota==10){
        return "sobresaliente"
    }else{
        return "error"
    }

}




function notaMedia(notas,alumnos){
    let media=[];
    let asignaturas=Object.keys(notas[0]).length;
    for(let i=0; i<alumnos;i++){
        media.push((notas[i].BD+notas[i].PR+notas[i].ED+notas[i].FOL+notas[i].SI+notas[i].LM)/asignaturas);
    }
    for(let i=0; i<alumnos;i++){
        media[i]=Math.round(media[i]);
    }
    return media;
}


function buscarAlumno(datos,textoBuscarAlumno){
    let alumnos= Object.keys(datos.alumnos).length;
    console.log(textoBuscarAlumno);
    for(let i=0;i<alumnos;i++){
        if(datos.alumnos[i].nombre==textoBuscarAlumno){
    
    
            tabla +=`
            <tr>
            <td>${datos.alumnos[i].nombre}  ${datos.alumnos[i].apellido} </td>
            <td>${datos.alumnos[i].curso}  </td>
            <td>${datos.alumnos[i].notas.LM} ${notasTexto(datos.alumnos[i].notas.LM)}</td>
            <td>${datos.alumnos[i].notas.PR} ${notasTexto(datos.alumnos[i].notas.PR)}</td>
            <td>${datos.alumnos[i].notas.FOL} ${notasTexto(datos.alumnos[i].notas.FOL)}</td>
            <td>${datos.alumnos[i].notas.BD} ${notasTexto(datos.alumnos[i].notas.BD)}</td>
            <td>${datos.alumnos[i].notas.ED} ${notasTexto(datos.alumnos[i].notas.ED)}</td>
            <td>${datos.alumnos[i].notas.SI} ${notasTexto(datos.alumnos[i].notas.SI)}</td>
        </tr>
            `;
        
        tabla+=` </tbody>
        </table>`;
        return tabla;
        }
}
}