import React from 'react';
import CollectionPreview from '../../components/collection-preview/collectionPreview.component';

import Shop_Data from './shop.data';

class ShopPage extends React.Component{
    state={
        collections: Shop_Data
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps})=> <CollectionPreview key={id} {...otherCollectionProps}/>)
                }
            </div>
        )
    }
};

export default ShopPage;