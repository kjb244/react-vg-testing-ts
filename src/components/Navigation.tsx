import {Badge, Button, Col, Container, Navbar} from "react-bootstrap";
import {StateModel} from "../models/state.model";
import {connect, ConnectedProps} from "react-redux";
import {NavigationModel} from "../models/navigation.model";



function Navigation(props: NavigationModel){

    function getCartCount(){
        return props.products.filter(e => e.inCart).length;
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-end">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Col xs="auto">
                    <Button type="submit">
                        Cart&nbsp;
                        <Badge bg="secondary">{getCartCount()}</Badge>
                    </Button>
                </Col>
            </Container>
        </Navbar>
    );

}

const mapStateToProps =(state: StateModel) => {
    return{
        products: state.cartData
    }
};

const connector = connect(mapStateToProps);

export type propsFromRedux = ConnectedProps<typeof connector>;


export default connector(Navigation);

