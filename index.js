class CotizarPlan{
    constructor(nombreTitular,edadTitular,ingresaConyuge,edadConyuge,ingresaHijos,cantidadHijos,edadesHijos){
        this.nombreTitular=nombreTitular;
        this.edadTitular=edadTitular;
        this.ingresaConyuge=ingresaConyuge;
        this.edadConyuge=edadConyuge;
        this.ingresaHijos=ingresaHijos;
        this.cantidadHijos=cantidadHijos;
        this.edadesHijos=edadesHijos;
        this.precioPlan=0;
    }

    cotizar(){
        //Cotización titular
        if(this.edadTitular>=18 && this.edadTitular<60){
            this.precioPlan+=10000;
            console.log("El precio titular solo es: $"+this.precioPlan);
        }else if(this.edadTitular>=60){
            this.precioPlan+=20000;
            console.log("El precio titular solo es: $"+this.precioPlan);
        }else{
            alert("Usted es menor de edad no puede ser titular de un plan");
        }

        //Cotización conyuge
        if(ingresaConyuge){
            if(this.edadConyuge>=18 && this.edadConyuge<60){
                this.precioPlan+=10000;
                console.log("El precio matrimonio es: $"+this.precioPlan);
            }else if(this.edadConyuge>=60){
                this.precioPlan+=20000;
                console.log("El precio matrimonio es: $"+this.precioPlan);
            }else{
                alert("Su conyuge es menor de edad no puede igresar al plan");
            }
        } else{
            console.log("No ingresa conyuge")
        }


        // Cotización hijos
        if(this.ingresaHijos){
            for (let i=0;i<this.cantidadHijos;i++){
                if(this.edadesHijos[i]>=26){
                    this.precioPlan+=5000;
                }else{
                    this.precioPlan+=3000;
                }
            }
        } else{
            console.log("No ingresa hijos")
        }


    return this.precioPlan;
    }
}

let nombreTitular= prompt("Ingrese nombre titular");

let edadTitular= prompt("Ingrese edad titular");

let ingresaConyuge=confirm("Ingresa conyuge al plan");

let edadConyuge= null;

if(ingresaConyuge){
    edadConyuge=prompt("Ingrese edad conyuge");
}

let ingresaHijos= confirm("Ingresa hijos a su plan");
let cantidadHijos=null;
let edadesHijos= [];

if(ingresaHijos){
    cantidadHijos= prompt("Cantidad de hijos a ingresar")
    for (let i=0;i<cantidadHijos;i++){
        let edadHijo=prompt("Ingrese edad del hijo"+(i+1));
        edadesHijos.push(edadHijo);
    }
}


let plan= new CotizarPlan(nombreTitular,edadTitular,ingresaConyuge,edadConyuge,ingresaHijos,cantidadHijos,edadesHijos);

let precio=plan.cotizar();

alert("Estimado "+plan.nombreTitular+" el precio de su plan es: $" + precio);