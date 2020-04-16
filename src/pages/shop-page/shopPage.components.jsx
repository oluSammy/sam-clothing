import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import Collection from '../collection/collection.components';

const ShopPage = ({match}) =>{            
    // console.log(match);
    return(
        <div className="shop-page"> 
            <Route path={`${match.path}`} component={Collection} />
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
        </div>
    )    
};



export default ShopPage;