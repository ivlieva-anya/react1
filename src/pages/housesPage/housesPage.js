import React,{Component} from 'react';
import ItemList from '../../components/itemList';
import ItemDetails,{Field} from '../../components/itemDetails';
import ErrorMessage from '../../components/errorMesage';
import GotService from '../../services/gotService.js';
import RowBloc from '../../components/rowBlock'

export default class HousesPage extends Component{
    gotService = new GotService();
    state = {
        selectedHouse: 10,
    }

    onItemSelected = (id)=>{
        this.setState({
            selectedHouse:id,
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
                getData = {this.gotService.getAllHouses}
                renderItem = {({name})=>name}/>            
        )
        const charDetails = (
            <ItemDetails 
                itemId={this.state.selectedHouse} 
                getData = {this.gotService.getHouses}>
                    <Field field = 'region' label = 'Region'></Field>
                    <Field field = 'words' label = 'Words'></Field>
                    <Field field = 'titles' label = 'Titles'></Field>
                    <Field field = 'overlord' label = 'Overlord'></Field>
                    <Field field = 'ancestralWeapons' label = 'Ancestral Weapons'></Field>
            </ItemDetails>
        )
        return(
            <RowBloc left = {itemList} right = {charDetails}/>
        )
    }
}