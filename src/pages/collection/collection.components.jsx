import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const Collection = ({collection})=>{
    // const {title, items} = collection;
    return(
        <div className="collection-page">
            <h2>Category Page</h2>
        </div>
    )
};

const mapStateToProps = (state, ownProps)=>{
    return{
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(Collection);