import React,{Component} from 'react';
import ItemList from '../../components/itemList';
import ErrorMessage from '../../components/errorMesage';
import GotService from '../../services/gotService.js';
import {withRouter} from 'react-router-dom'

class BookPage extends Component{
    gotService = new GotService();
    state = {
        error:false
    }

    componentDidCatch(){
        this.setState({error:true})
    }

    render(){

        if (this.state.error) {
            return <ErrorMessage/>
        }
        return(
            <ItemList 
                onItemSelected={
                    (itemId)=>{
                        this.props.history.push(itemId)
                    }
                }
                getData = {this.gotService.getAllBooks}
                renderItem = {({name})=>name}/>            
        )
    }
}
export default withRouter(BookPage);