import React,{Component} from 'react';
import ItemList from '../../components/itemList';
import ItemDetails,{Field} from '../../components/itemDetails';
import ErrorMessage from '../../components/errorMesage';
import GotService from '../../services/gotService.js';
import RowBloc from '../../components/rowBlock'

export default class BookPage extends Component{
    gotService = new GotService();
    state = {
        selectedBook: 5,
    }

    onItemSelected = (id)=>{
        this.setState({
            selectedBook:id,
            error:false
        })
    }

    componentDidCatch(){
        this.setState({error:true})
    }

    render(){

        if (this.state.error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData = {this.gotService.getAllBooks}
                renderItem = {({name})=>name}/>            
        )
        const bookDetails = (
            <ItemDetails 
                itemId={this.state.selectedBook} 
                getData = {this.gotService.getBooks}>
                    <Field field = 'numberOfPages' label = 'Number Of Pages'></Field>
                    <Field field = 'born' label = 'Born'></Field>
                    <Field field = 'publiser' label = 'Publiser'></Field>
                    <Field field = 'released' label = 'Released'></Field>
                    <Field field = 'culture' label = 'Culture'></Field>

            </ItemDetails>
        )
        return(
            <RowBloc left = {itemList} right = {bookDetails}/>
        )
    }
}