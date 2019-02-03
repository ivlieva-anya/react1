import React,{Component} from 'react';
import {Row, Container} from 'reactstrap';
import Header from '../header';
// import RandomChar from '../randomChar';
// import ErrorMessage from '../errorMesage';
import CaracterPage from '../../pages/characterPage'
import BookPage from '../../pages/bookPage'
import HousesPage from '../../pages/housesPage'
import RunChar from '../ranChar'

export default class App extends Component {
    // state = {
    //     random:true,
    //     error:false
    // }
    // componentDidCatch(){
    //     this.setState({error:true})
    // }
    // onClick=() =>{
    //     const newran = !this.state.random;
    //     this.setState({
    //         random:newran
    //     });
    // }

    render = () => {
        // const ranchar = this.state.random ? <RanChar/>: null; 
        // if (this.state.error) {
        //     return <ErrorMessage/>
        // }
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    {/* {ranchar} */}
                    <RunChar/>
                </Row>
                <CaracterPage/>
                <BookPage/>
                <HousesPage/>
            </Container>
        </>
    );

    }
};
// const RanChar = ()=>{
//     return(
//         <>
//             <Col lg={{size: 5, offset: 0}}>
//                 <RandomChar/>
//             </Col>
//             <Button outline
//                     color="link" 
//                     className = 'random-block' 
//                     onClick = {this.onClick}>
//             Выключить/<br></br>/Включить
//             </Button> 
//         </>
//     )
// }
