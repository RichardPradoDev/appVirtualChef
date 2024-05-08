import livroiniciante from '../../assets/produtos/livroiniciante.png'
import kitBasico from '../../assets/produtos/kitBasico.jpg'

const sobre = {
    topo: {
        titulo: "Detalhes do produto",
    },
    itens: {
        lista: [
            {
                id: 1,
                detalhes: "Nosso livro de culinária físico ensina receitas básicas,combinações de lanches perfeitas e harmonizações impecáveis de molhos",
                nome: "Livro de Culinária para Iniciantes",
                preco: "R$ 49,99",
                imagem: livroiniciante,
                botao: "Adicionar a lista de desejos",
            },
            {
                id: 2,
                detalhes: "Kit com itens básico para o cozinheiro",
                nome: "Kit Cozinheiro Completo",
                preco: "R$ 150,00",
                imagem: kitBasico,
                botao: "Adicionar a lista de desejos",
            },
        ]
    }
}
export default produto;
