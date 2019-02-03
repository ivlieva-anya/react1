import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import Spinner from '../spiner'

import './charDetails.css';
export default class CharDetails extends Component {

    gotService = new GotService()
    state = {
        char:null,
        loading:true,
        error:false
    }
    componentDidMount(){
        this.updateChar()
    }

    onError=(err)=>{
        console.log(`err: ${err}`)
        this.setState({
            error:true,
            loading:false
        })
    }

    updateChar(){
        const {charId} = this.props
        if (!charId){
            return
        }
        this.gotService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoaded=(char)=>{
        this.setState({char,loading:false})
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    render() {
        const {char , loading} = this.state;

        if (!char) {
            return <span className = 'select-error'>Please select a character</span>
        }
        const content = loading ? <Spinner/> : <View char={char}/>; 

        return (
            <div className="char-details rounded">
                {content}
            </div>
        );
    }
}
const View = ({char}) =>{
    const {name,gender,born,died,culture} = char;
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}