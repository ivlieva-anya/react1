import React,{Component} from 'react';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMesage';
import {Col,Button} from 'reactstrap';

export default class RanChar extends Component {

    state = {
        random:true,
        error:false
    }

    componentDidCatch(){
        this.setState({error:true})
    }

    onClick=() =>{
        const newran = !this.state.random;
        this.setState({
            random:newran
        });
    }
    content=()=>{
        if (this.state.random) {
            return(
                <Col lg={{size: 5, offset: 0}}>
                    <RandomChar/>
                </Col>
            )
        } else {
            return null
        }
    }
    render(){
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const content = this.content()
        return(
            <>
                {content}
                <Button outline
                        color="link" 
                        className = 'random-block' 
                        onClick = {this.onClick}>
                Выключить/<br></br>/Включить
                </Button> 
            </>
        )          
    
    }
}