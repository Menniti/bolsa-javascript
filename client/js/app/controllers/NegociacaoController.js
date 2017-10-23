class NegociacaoController {

	constructor(){

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputValor = $('#valor');
		this._inputQuantidade = $('#quantidade');
		this._listaNegociacoes = new ListaNegociacoes();
		

		this._negociacoesView = new NegociacoesView($('#tabelaNegociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem('Ordem atualizada com sucesso');
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	_criaNegociacao() {
		return new Negociacao(
				DataHelper.textoParaData(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value	
			);
	}

	_limpaNegociacao(){
		this._inputData.value = ''
		this._inputValor.value = 1
		this._inputQuantidade.value = 0.0
	}

	adiciona (event){
		event.preventDefault();	

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaNegociacao();

		this._negociacoesView.update(this._listaNegociacoes);
		this._mensagemView.update(this._mensagem);
	}

}