import React,{Component} from 'react';
import GotService from '../services/gotService.js';
import ItemDetails,{Field} from '../components/itemDetails';

export default class BooksItem extends Component {
    gotService = new GotService();

    render(){
        return(
            <ItemDetails 
                itemId={this.props.bookId} 
                getData = {this.gotService.getBooks}>
                    <Field field = 'numberOfPages' label = 'Number Of Pages'></Field>
                    <Field field = 'born' label = 'Born'></Field>
                    <Field field = 'publiser' label = 'Publiser'></Field>
                    <Field field = 'released' label = 'Released'></Field>
                    <Field field = 'culture' label = 'Culture'></Field>
            </ItemDetails>
        )
    }
}