import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {Navigate, Route, Routes} from "react-router-dom";
import Splash from "./components/splash";
import View1 from "./components/view1";
import RouteWorker from "./components/route-worker";
import {connect, ConnectedProps} from "react-redux";
import View2 from "./components/view2";
import {StateModel} from "./models/state.model";
import {AppModel} from "./models/app.model";

function App(props: AppModel) {
  return (
      <Container>
        <RouteWorker/>
        <Row style={{marginTop: '20px'}}>
          <Col>
            <Routes>
              <Route path='/splash' element={<Splash/>}/>
              <Route path='/view1' element={props.currRoute ?
                  <View1/> :
                  <Navigate to='/splash' replace/>}
              />
              <Route path='/view2' element={<View2/>}/>
              <Route path='/fake' element={props.currRoute ?
                  <Navigate to='/view1' replace/> :
                  <Navigate to='/splash' replace/>}
              />
              <Route path='*' element={<Navigate to="/splash" replace />} />

            </Routes>


          </Col>
        </Row>
      </Container>

  );
}

const mapStateToProps =(state: StateModel) => {
  return{
    currRoute: state.currRoute
  }
};

const connector = connect(mapStateToProps)

export type propsFromRedux = ConnectedProps<typeof connector>;


export default connector(App);