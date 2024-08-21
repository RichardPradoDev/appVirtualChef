import avental from '../../assets/produtos/avental.jpg'
import kitFacas from '../../assets/produtos/kitFacas.jpg'
import kitUtilidades from '../../assets/produtos/kitUtilidades.jpg'


const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit Culinária - Iniciante",
        detalhes: "Nosso Kit básico é composto por varios utensilos super importantes para o seu dia a dia",
        preco: "R$139,99",
        botao: "Adicionar a lista de desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "1x Kit facas",
                imagemKit: kitFacas,
            },
            {
                nome: "1x Kit utilidades",
                imagemKit: kitUtilidades,
            },
            {
                nome: "1x avental",
                imagemKit: avental,
            },
        ]
    }
}

export default produto;

