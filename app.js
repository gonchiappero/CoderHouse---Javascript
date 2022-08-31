let familia = Number(prompt("Ingrese la cantidad de personas que viven en su hogar"));
let nombreFamilia = '';

for(let i = 0; i < familia; i++) {
    nombreFamilia += prompt("Ingresar nombre de Residente")+"\n";
}
if (familia === 1) {
    alert(`El nombre de la persona que vive en este hogar es: 
${nombreFamilia}`);
    } else {
    alert(`Los nombres de las ${familia} personas que viven en el hogar son:
${nombreFamilia}`)
}


