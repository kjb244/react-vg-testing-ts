import {Badge, Button, Col, Container, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {StateContext} from "../providers/state.context";



function Navigation(){
    const {coreData} = useContext(StateContext);

    function getCartCount(){
        return coreData.cartData.filter(e => e.inCart).length;
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


export default Navigation

