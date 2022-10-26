export class Nota {
    //atributos
    private id?:number;
    public titulo!: string;
    public cuerpo!: string;
    public fechaCreacion!: Date;

    //constructores
    constructor(titulo:string, cuerpo:string, fechaCreacion:Date){
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.fechaCreacion = fechaCreacion;
    }

    //getters and setters
    public getTitulo(){
        return this.titulo;
    }

    public getCuerpo(){
        return this.cuerpo;
    }

    public getFechaDeCreacion(){
        return this.fechaCreacion;
    }

    public setTitulo(titulo:string){
        this.titulo = titulo;
    }

    public setCuerpo(cuerpo:string){
        return this.cuerpo = cuerpo;
    }
}