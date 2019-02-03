import React, {Component} from 'react';
import Spinner from '../spiner'
import './itemList.css';

export default class ItemList extends Component {

    state = {
        itemList:null,
        error:false
    }
    componentDidMount(){
        const {getData}= this.props;
        // this.gotService.getAllCharacters()
        getData()
            .then((itemList)=>{
                this.setState({
                    itemList
                })
            })
            .catch(this.onError);
    }

    onError=(err)=>{
        console.log(`Ошибка: ${err}`)
        this.setState({
            error:true,
        })
    }

    renderItems(arr){
        return arr.map((item)=>{
            const {id} = item;
            const label = this.props.renderItem(item)
            return(
                <li 
                    key = {id}
                    className="list-group-item"
                    onClick = {()=>this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }
    render() {
        const {itemList} = this.state
        if (!itemList) {
            return <Spinner/>
        } 
        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}