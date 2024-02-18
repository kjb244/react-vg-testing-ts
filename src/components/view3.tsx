import {Button, Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {StateContext} from "../providers/state.context";
import {Product} from "../models/state.model";
import {EnvironmentContext} from "../providers/environment-context";


function View3(){
    const {coreData, setCoreData} = useContext(StateContext);
    const {environmentProperties, setEnvironmentProperties} = useContext(EnvironmentContext);

    const inCartProducts: Product[] = coreData.cartData.filter(e => e.inCart);
    const notInCartProducts: Product[] = coreData.cartData.filter(e => !e.inCart);

    function deleteCart(product: Product){
        setCoreData({
            ...coreData,
            cartData: coreData.cartData.map((e: Product) =>{
                if(e.product === product.product){
                    e.inCart = false;
                }
                return e;
            })
        })
    }

    function addCart(product: Product){
        setCoreData({
            ...coreData,
            cartData: coreData.cartData.map((e: Product) =>{
                if(e.product === product.product){
                    e.inCart = true;
                }
                return e;
            })
        })
    }
    return (
        <>
            <Row>
                <Col sm={12}>
                    <p>Is internal: {environmentProperties.isInternal + ''}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h3>In Cart</h3>
                    {inCartProducts.map((e: Product) =>{
                        return (
                            <Row key={e.product}>
                                <Col sm={9}>
                                    {e.product}
                                </Col>
                                <Col sm={3} className='mt-3'>
                                    <Button variant='primary' onClick={() =>{deleteCart(e)}}>Delete</Button>
                                </Col>

                            </Row>
                        )
                    })}
                </Col>
                <Col sm={6}>
                    <h3>Not In Cart</h3>
                    {notInCartProducts.map((e: Product) =>{
                        return (
                            <Row key={e.product}>
                                <Col sm={9}>
                                    {e.product}
                                </Col>
                                <Col sm={3} className='mt-3'>
                                    <Button variant='primary' onClick={() =>{addCart(e)}}>Add</Button>
                                </Col>

                            </Row>
                        )
                    })}
                </Col>
            </Row>


        </>
    )
}


export default View3