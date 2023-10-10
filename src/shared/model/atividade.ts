export class Atividade {

  constructor(private _titulo:string, private _descricao: string, private _prazo: string){
  }

  get titulo():string{
    return this._titulo
  }
  set titulo(value: string){
    this._titulo = value;
  }

  get descricao():string{
    return this._descricao;
  }
  set descricao(value: string){
    this._descricao = value;
  }

  get prazo():string{
    return this._prazo;
  }
  set prazo(value: string){
    this._prazo = value;
  }
}

