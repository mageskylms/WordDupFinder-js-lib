export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
            throw new Error ('Arquino Não encontrado');
    } else {
        return "Erro na aplicação"
    }
}