import kitBasico from '../../assets/produtos/kitBasico.jpg'
import kitFacas from '../../assets/produtos/kitFacas.jpg'
import avental from '../../assets/produtos/avental.jpg'
import kitUltil from '../../assets/produtos/kitUtil.jpg'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit Cozinheiro Completo",
        detalhes: "Kit com itens básico para o cozinheiro",
        preco: "R$ 259,99",
        imagem: kitBasico,
        botao: "Adicionar a lista de desejos",
    },
    itens: {
        lista: [
            {
                id: 1,
                nome: "1x ",
                imagem: kitFacas,
            },
            {
                id: 2,
                nome: "1x  ",
                imagem: avental,
            },
            {
                id: 3,
                nome: "1x ",
                imagem: kitUltil,
            },
        ]
    }
}

export default produto;






/*nome: "Livro de Culinária para Iniciantes",
preco: "R$ 49,99",
imagem: kitBasico,
detalhes: "Nosso livro de culinária físico ensina receitas básicas,combinações de lanches perfeitas e harmonizações impecáveis de molhos",
botao: "Adicionar a lista de desejos",
},
{
id: 2,*/