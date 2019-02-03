import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import Spinner from '../spiner'
import './itemDetails.css';

const Field = ({item,field,label})=>{
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export{Field}
export default class ItemDetails extends Component {

    gotService = new GotService()
    state = {
        item:null,
        loading:true,
        error:false
    }
    componentDidMount(){
        this.updateItem()
    }

    onError=(err)=>{
        console.log(`err: ${err}`)
        this.setState({
            error:true,
            loading:false
        })
    }

    updateItem(){
        const {itemId} = this.props
        const {getData}= this.props;
        if (!itemId){
            return
        }
        getData(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError);
    }

    onItemLoaded=(item)=>{
        this.setState({item,loading:false})
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {
        const {item , loading} = this.state;

        if (!item) {
            return <span className = 'select-error'>Please select a character</span>
        }
        const content = loading ? <Spinner/> : <View item={item} obj = {this.props.children}/>; 

        return (
            <div className="char-details rounded">
                {content}
            </div>
        );
    }
}
const View = ({item,obj}) =>{
    const {name} = item;
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(obj,(child)=>{
                        return React.cloneElement(child,{item})
                    })
                }
            </ul>
        </>
    )
}