class MensagemView extends View {

	constructor(elemento){
		super(elemento)
	}

	template(model){
		return model._texto ? `<p class='alert alert-info'>${model._texto}</p>` : `<p></p>`
	}

}