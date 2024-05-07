import React from 'react';
import { FlatList, View } from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../componentes/Texto';

export default function Index({ topo, detalhes, itens }) {
    return <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.nome}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <View>
                    <Detalhes {...detalhes} />
                    <Texto style={style.titulo}>{itens.titulo}</Texto>
                </View>
            </>
        }}
    />
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 26,
        color: "black",
        fontWeight: "bold",
        marginLeft: 10,
    }
})