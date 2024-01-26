import {NudgeModel} from "../models/nudge.model";
import {Button, Card, Col, Row} from "react-bootstrap";



export default function nudges(nudges: NudgeModel[]){
    const numberColsMd: number = nudges.length === 2 ? 4 : 12/nudges.length;
    const maybeMiddleCol = (index: number) => {
        if (nudges.length === 2 && index === 1) {
            return <Col sm={12} md={4}></Col>
        }
        return null;
    }
    return (
        <>
            <Row>
                {nudges.map((nudge,i) => {
                   return <>
                       {maybeMiddleCol(i)}
                       <Col sm={12} md={numberColsMd}>

                           <Card >
                               <Card.Img style={{maxHeight: '250px'}} variant="top"
                                         src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" />
                               <Card.Body>
                                   <Card.Title>{nudge.title}</Card.Title>
                                   <Card.Text>
                                       {nudge.body.map((body:string) => {
                                           return <p>{body}</p>
                                       })}
                                   </Card.Text>
                                   <Card.Link href={nudge.linkHref}>{nudge.linkText}</Card.Link>
                               </Card.Body>
                           </Card>
                       </Col>

                       </>


                })}

            </Row>
        </>
        )

}