import React,{Component} from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    state = {
        random:true
    }
    onClick=() =>{
        const newran = !this.state.random;
        this.setState({
            random:newran
        });
    }

    render = () => {
        const ranchar = this.state.random ? <RanChar/>: null; 
        // console.log(ranchar)
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    {ranchar}
                    <Button outline
                         color="link" 
                         className = 'random-block' 
                         onClick = {this.onClick}>
                    Выключить/<br></br>Включить
                    </Button>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );

    }
};
const RanChar = ()=>{
    return(
        <Col lg={{size: 5, offset: 0}}>
            <RandomChar/>
        </Col>
    )
}
