class NegociacoesView extends View {

	constructor(elemento) {
		super(elemento);
	}

	template(model) {
		return `<table class="table table-hover table-bordered">
			        <thead>
			            <tr>
			                <th>DATA</th>
			                <th>QUANTIDADE</th>
			                <th>VALOR</th>
			                <th>VOLUME</th>
			            </tr>
			        </thead>
			        
			        <tbody>
			        	${model.negociacoes.map(negociacao => {
			        		return `
			        			<tr>
			        				<td>${DataHelper.dataParaTexto(negociacao.data)}</td>
			        				<td>${negociacao.quantidade}</td>
			        				<td>${negociacao.valor}</td>
			        				<td>${negociacao.volume}</td>
			        			</tr>
			        		`
			        	})}

			        </tbody>

			        <tfoot>
			        	<td colspan=3></td>
			        	<td>
			        		${model.negociacoes.reduce((total,negociacao) => total + negociacao.volume, 0.0)}
			        	</td>
			        </tfoot>
	    		</table>`;
	}

}