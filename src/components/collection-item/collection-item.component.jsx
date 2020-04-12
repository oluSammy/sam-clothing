import React from 'react';
import {connect} from 'react-redux';

import CustomBtn from '../custom-btn/custom-btn.component'
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'
// import CollectionPreview from '../collection-preview/collectionPreview.component';

const CollectionItem = ({ item, addItem})=>{
    const { name, price, imageUrl} = item
    return(
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}            
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomBtn onClick={()=> addItem(item)} inverted>Add to cart</CustomBtn>
        </div>
    )
};


const mapDispatchToProps = dispatch => {
    return{
        addItem: item=> dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps) (CollectionItem);
 