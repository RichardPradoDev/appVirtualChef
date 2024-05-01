import kitBasico from '../../assets/produtos/kitBasico.jpg'
import kitFacas from '../../assets/produtos/kitFacas.jpg'
import avental from '../../assets/produtos/avental.jpg'
import kitUtensilios from '../../assets/produtos/kitUtensilios.jpg'

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
        titulo: "Itens do Kit",
        lista: [
            {
                id: 1,
                nome: "1 Kit com 5 facas",
                imagem: kitFacas,
            },
            {
                id: 2,
                nome: "1 Avental  ",
                imagem: avental,
            },
            {
                id: 3,
                nome: "1 Kit de utensílios",
                imagem: kitUtensilios,
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