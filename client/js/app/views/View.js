class View {
	
	constructor(elemento){
		this._elemento = elemento;
	}

	template(model){
		throw new Error('O template precisa ser sobrescrito na classe filha')
	}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}
}