export class ContainerData {
    cod_iso: string;
    plug_in: Date;
    plug_out: Date;
    consumo_final: number;

    setData(cod_iso: string, plug_in: Date, plug_out: Date, consumo_final: number){
        this.cod_iso = cod_iso;
        this.plug_in = plug_in;
        this.plug_out = plug_out;
        this.consumo_final = consumo_final;
    }
}