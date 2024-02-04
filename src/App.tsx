import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {Navigate, Route, Routes} from "react-router-dom";
import Splash from "./components/splash";
import View1 from "./components/view1";
import View2 from "./components/view2";
import View3 from "./components/view3";
import {StateContext} from "./providers/state.context";
import {useState} from "react";
import Navigation from "./components/Navigation";
import {CoreData} from "./models/state.model";

const initialState: CoreData = {
    routesVisited: null,
    currRoute: null,
    routeMapping: {
        splash: {
            next: 'view1',
            prev: null
        },
        view1: {
            prev: null,
            next: 'view2'
        }
    },
    ajaxData: {
        bpm: {},
        name: []
    },
    cartData: [
        {
            product: 'blueberries',
            inCart: false
        },
        {
            product: 'cabbage',
            inCart: false
        }
    ]
}

function App() {

    const [coreData, setCoreData] = useState<CoreData>(initialState);
    return (
      <Container>
          <StateContext.Provider value={{coreData, setCoreData}}>
              <Navigation/>
          </StateContext.Provider>
        <Row style={{marginTop: '20px'}}>
          <Col>
            <Routes>
              <Route path='/splash' element={
                  <StateContext.Provider value={{coreData, setCoreData}}>
                    <Splash/>
                  </StateContext.Provider>
                  }
              />
              <Route path='/view1' element={
                  <StateContext.Provider value={{coreData, setCoreData}}>
                      {coreData.currRoute ?  <View1/> : <Navigate to='/splash' replace/>}
                  </StateContext.Provider>
                }
              />
              <Route path='/view2' element={<View2/>}/>
                <Route path='/fake' element={coreData.currRoute ?
                    <Navigate to='/view1' replace/> :
                    <Navigate to='/splash' replace/>}
                />
                <Route path='/view3' element={
                    <StateContext.Provider value={{coreData, setCoreData}}>
                        <View3/>
                    </StateContext.Provider>
                }
                />
              <Route path='*' element={<Navigate to="/splash" replace />} />

            </Routes>


          </Col>
        </Row>
      </Container>

    );
}




export default App;