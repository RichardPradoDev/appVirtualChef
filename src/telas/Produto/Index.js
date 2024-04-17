import React from 'react';
import { FlatList, View } from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../componentes/Texto';

export default function Index({ topo, detalhes, itens }) {
    /*const renderItem = ({ item: { nome, imagem } }
    ) =>
        <View key={nome}>
            <image source={imagem} />
            <Text>{nome}</Text>
        </View>*/


    return <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => { nome }}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </>
        }}
    />
}