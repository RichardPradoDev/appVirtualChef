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
        keyExtractor={itens.lista.id}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <Detalhes {...detalhes} />
            </>
        }}
    />
}