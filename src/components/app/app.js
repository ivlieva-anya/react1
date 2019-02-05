import React,{Component} from 'react';
import {Row, Container} from 'reactstrap';
import Header from '../header';
import CaracterPage from '../../pages/characterPage'
import BookPage from '../../pages/bookPage'
import HousesPage from '../../pages/housesPage'
import RunChar from '../ranChar'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import BooksItem from '../../pages'

export default class App extends Component {

    render = () => {
    return (
        <Router>
            <div className = 'app'> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <RunChar/>
                    </Row>
                    <Route path='/characters' component = {CaracterPage}/>
                    <Route path='/houses' component = {HousesPage}/>
                    <Route path='/books' exact component = {BookPage}/>
                    <Route path='/books/:id' render = {
                        ({match})=>{
                            const {id}= match.params;
                        return <BooksItem bookId={id}/>}
                        }/>
                </Container>
            </div>
        </Router>
    );

    }
};
