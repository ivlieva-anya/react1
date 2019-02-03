import React,{Component} from 'react';
import ItemList from '../../components/itemList';
import ItemDetails,{Field} from '../../components/itemDetails';
import ErrorMessage from '../../components/errorMesage';
import GotService from '../../services/gotService.js';
import RowBloc from '../../components/rowBlock'

export default class CaracterPage extends Component{
    gotService = new GotService();
    state = {
        selectedChar: 120,
    }

    onItemSelected = (id)=>{
        this.setState({
            selectedChar:id,
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
                getData = {this.gotService.getAllCharacters}
                renderItem = {({name,gender})=>`${name}(${gender})`}/>            
        )
        const charDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar} 
                getData = {this.gotService.getCharacter}>
                    <Field field = 'gender' label = 'Gender'></Field>
                    <Field field = 'born' label = 'Born'></Field>
                    <Field field = 'died' label = 'Died'></Field>
                    <Field field = 'culture' label = 'Culture'></Field>
            </ItemDetails>
        )
        return(
            <RowBloc left = {itemList} right = {charDetails}/>
        )
    }
}