import React from 'react';
import { DataView } from 'react-router-dom'; // Это может быть неверным, проверьте правильный импорт
import { Card } from 'primereact/card';

const ItemRenderer = ({ item }) => (
    <DataView className="flex align-items-center p-menuitem-link">
        <Card>
        </Card>
    </DataView>
);

export default ItemRenderer;
