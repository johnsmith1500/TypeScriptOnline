namespace empresa{
    export class Cliente extends Pessoa{
        private _codCliente:number;
        private _credito:number;

        constructor(nome:string, codigoCliente:number){
            super(nome);
            this._codCliente = codigoCliente;
        }

        get codCliente():number{
            return this._codCliente;
        }

        set codCliente(cod:number){
            this._codCliente = cod;
        }

        get credito():number{
            return this._credito;
        }

        set credito(credito:number){
            this._credito = credito;
        }

        public comprar(valorProduto:number, desconto?: number){
            let result:string;

            if(typeof desconto === undefined){
                if(valorProduto <= this._credito){
                result = "Compra aprovada";
                }else{
                    result = "Compra negada";
                }
            }else{
                if((valorProduto - desconto) <= this._credito){
                    result = "Compra aprovada";
                }else{
                    result = "Conpra negada";
                }
            }

            

            return result;
        }
    }
}