class CotizarPlan {
    constructor(nombreTitular, edadTitular, edadConyuge, cantidadHijos, edadesHijos) {
        this.nombreTitular = nombreTitular;
        this.edadTitular = edadTitular;
        this.edadConyuge = edadConyuge;
        this.cantidadHijos = cantidadHijos;
        this.edadesHijos = edadesHijos;
        this.precioPlan = 0;

    }

    cotizar() {
        //Cotización titular
        if (this.edadTitular >= 18 && this.edadTitular < 60) {
            this.precioPlan += 10000;
            console.log("El precio titular solo es: $" + this.precioPlan);
        } else if (this.edadTitular >= 60) {
            this.precioPlan += 20000;
            console.log("El precio titular solo es: $" + this.precioPlan);
        } else {
            Swal.fire('Usted es menor de edad no puede ser titular de un plan');

            //alert("Usted es menor de edad no puede ser titular de un plan");
        }

        //Cotización conyuge
        if (this.edadConyuge != null) {
            if (this.edadConyuge >= 18 && this.edadConyuge < 60) {
                this.precioPlan += 10000;
                console.log("El precio matrimonio es: $" + this.precioPlan);
            } else if (this.edadConyuge >= 60) {
                this.precioPlan += 20000;
                console.log("El precio matrimonio es: $" + this.precioPlan);
            } else {
                Swal.fire('Su cónyuge es menor de edad');
            }
        } else {
            console.log("No ingresa conyuge")
        }


        // Cotización hijos
        if (this.cantidadHijos > 0) {
            for (let i = 0; i < this.cantidadHijos; i++) {
                if (this.edadesHijos[i] >= 26) {
                    this.precioPlan += 5000;
                } else {
                    this.precioPlan += 3000;
                }
            }
        } else {
            console.log("No ingresa hijos")
        }
        return this.precioPlan;
    }
}

  //Seleccion de plan
document.querySelectorAll('.box').forEach(box => {

    box.addEventListener('click', () => {
        document.querySelector('#divNombreTitular').style.display = 'none';
        document.querySelector('#divEdadTitular').style.display = 'none';
        document.querySelector('#divConyugeEdad').style.display = 'none';
        document.querySelector('#divCantidadHijos').style.display = 'none';
        document.querySelector('#bntEnviar').style.display = 'none';



        switch(box.textContent.trim()){
                case 'Para Mi':
                    document.querySelector('#divNombreTitular').style.display = 'block';
                    document.querySelector('#divEdadTitular').style.display = 'block';
                    document.querySelector('#bntEnviar').style.display = 'block';
                    break;

            case 'Para Mi y Mi Pareja':
                document.querySelector('#divNombreTitular').style.display = 'block';
                document.querySelector('#divEdadTitular').style.display = 'block';
                document.querySelector('#divConyugeEdad').style.display = 'block';
                document.querySelector('#bntEnviar').style.display = 'block';
                break;

            case 'Para Mi Familia':
                document.querySelector('#divNombreTitular').style.display = 'block';
                document.querySelector('#divEdadTitular').style.display = 'block';
                document.querySelector('#divConyugeEdad').style.display = 'block';
                document.querySelector('#divCantidadHijos').style.display = 'block';
                document.querySelector('#divHijo1').style.display = 'block';
                document.querySelector('#bntEnviar').style.display = 'block';
                break;
        }
    });
});

//cantidad de hijos
document.getElementById('cantidadHijos').addEventListener('change', function() {

    switch (this.value) {
        case "1":
            document.querySelector('#divHijo1').style.display = 'block';
            document.querySelector('#divHijo2').style.display = 'none';
            document.querySelector('#divHijo3').style.display = 'none';
            break;
        case "2":
            document.querySelector('#divHijo1').style.display = 'block';
            document.querySelector('#divHijo2').style.display = 'block';
            document.querySelector('#divHijo3').style.display = 'none';
            break;
        case "3":
            document.querySelector('#divHijo3').style.display = 'block';
            document.querySelector('#divHijo1').style.display = 'block';
            document.querySelector('#divHijo2').style.display = 'block';
            break;
    }
});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombreTitular = document.getElementById('nombreTitular').value;
    let edadTitular = document.getElementById('edadTitular').value;
    let edadConyuge = document.getElementById('edadConyuge').value;
    let cantidadHijos = document.getElementById('cantidadHijos').value;
    let edadesHijos = [];


    switch (cantidadHijos){
        case "0":
            break;
        case "1":
            edadesHijos.push(document.getElementById('edadHijo1').value);
            break;
        case "2":
            edadesHijos.push(document.getElementById('edadHijo1').value);
            edadesHijos.push(document.getElementById('edadHijo2').value);
            break;
        case "3":
            edadesHijos.push(document.getElementById('edadHijo1').value);
            edadesHijos.push(document.getElementById('edadHijo2').value);
            edadesHijos.push(document.getElementById('edadHijo3').value);
            break;
    }
let plan= new CotizarPlan(nombreTitular,edadTitular,edadConyuge,cantidadHijos,edadesHijos);

let precio = plan.cotizar();
    document.getElementById('precio').textContent = precio;

});
