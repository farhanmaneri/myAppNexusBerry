import React from 'react';
import KfcCard from './KfcCard';
import { items } from '../data/prodcutsData';

export default function Products({increment}) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
        
    {
        items.map(item => <KfcCard key={item.id} item={item} increment={increment}/>)
    }
    </div>
  )
}
