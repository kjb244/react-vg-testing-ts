import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {Navigate, Route, Routes} from "react-router-dom";
import Splash from "./components/splash";
import View1 from "./components/view1";
import View2 from "./components/view2";
import View3 from "./components/view3";
import {StateContext} from "./providers/state.context";
import React, {useState} from "react";
import Navigation from "./components/Navigation";
import {CoreData, EnvironmentProperties, EnvironmentType} from "./models/state.model";
import View4 from "./components/view4";
import {EnvironmentContext} from "./providers/environment-context";


const initialCoreData: CoreData = {
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

const initialEnvironment: EnvironmentProperties = {
    isInternal: true,
    type: EnvironmentType.DEV
}



function App() {

    const [coreData, setCoreData] = useState<CoreData>(initialCoreData);
    const [environmentProperties, setEnvironmentProperties] = useState<EnvironmentProperties>(initialEnvironment);

    return (
      <Container>
          <StateContext.Provider value={{coreData, setCoreData}}>
              <EnvironmentContext.Provider value={{environmentProperties, setEnvironmentProperties}}>
                  <Navigation/>
                  <Row style={{marginTop: '20px'}}>
                      <Col>
                          <Routes>
                              <Route path='/splash' element={
                                  <Splash/>
                              }
                              />
                              <Route path='/view1' element={
                                  coreData.currRoute ?  <View1/> : <Navigate to='/splash' replace/>
                              }
                              />
                              <Route path='/view2' element={<View2/>}/>
                              <Route path='/fake' element={coreData.currRoute ?
                                  <Navigate to='/view1' replace/> :
                                  <Navigate to='/splash' replace/>}
                              />
                              <Route path='/view3' element={
                                <View3/>
                                }
                              />
                              <Route path='/view4' element={<View4/>}/>
                              <Route path='*' element={<Navigate to="/splash" replace />} />

                          </Routes>


                      </Col>
                  </Row>

              </EnvironmentContext.Provider>

          </StateContext.Provider>
      </Container>

    );
}




export default App;