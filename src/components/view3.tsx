import {StateModel} from "../models/state.model";
import {connect, ConnectedProps} from "react-redux";
import {View3Model} from "../models/view3.model";
import {Button, Col, Row} from "react-bootstrap";
import {CartModel} from "../models/cart.model";
import {Dispatch} from "redux";
import {ActionModel, ActionType, AddDeleteCartValues} from "../models/action.model";


function View3(props: View3Model){
    const inCartProducts = props.products.filter(e => e.inCart);
    const notInCartProducts = props.products.filter(e => !e.inCart);
    return (
        <>
            <Row>
                <Col sm={6}>
                    <h3>In Cart</h3>
                    {inCartProducts.map((e: CartModel) =>{
                        return (
                            <Row key={e.product}>
                                <Col sm={9}>
                                    {e.product}
                                </Col>
                                <Col sm={3} className='mt-3'>
                                    <Button variant='primary' onClick={() =>{props.deleteCart(e.product)}}>Delete</Button>
                                </Col>

                            </Row>
                        )
                    })}
                </Col>
                <Col smm={6}>
                    <h3>Not In Cart</h3>
                    {notInCartProducts.map((e: CartModel) =>{
                        return (
                            <Row key={e.product}>
                                <Col sm={9}>
                                    {e.product}
                                </Col>
                                <Col sm={3} className='mt-3'>
                                    <Button variant='primary' onClick={() =>{props.addCart(e.product)}}>Add</Button>
                                </Col>

                            </Row>
                        )
                    })}
                </Col>
            </Row>


        </>
    )
}

const mapStateToProps =(state: StateModel) => {
    return{
        products: state.cartData
    }
};
const mapDispatchToProps = (dispatch: Dispatch<ActionModel>) => {
    return {
        addCart: (product: string)=>
            dispatch({
                type: ActionType.ADD_DELETE_CART,
                values: {
                    addDeleteCart: {
                        type: AddDeleteCartValues.ADD,
                        product
                    }
                }
            }),
        deleteCart: (product: string)=>
            dispatch({
                type: ActionType.ADD_DELETE_CART,
                values: {
                    addDeleteCart: {
                        type: AddDeleteCartValues.DELETE,
                        product
                    }
                }
            }),
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type propsFromRedux = ConnectedProps<typeof connector>;


export default connector(View3);