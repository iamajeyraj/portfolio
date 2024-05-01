import React from "react";
import { Education } from "../models/Portfolio";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";

interface Props {
    educations: Education[] | undefined;
}

export default function DisplayEducation({ educations }: Props) {
    return (
        <>
            <Card className="border-0 shadow">
                <CardHeader className="bg-primary bg-gradient text-white">
                    <CardTitle >
                        Education
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    {
                        educations?.map((education: Education | undefined) => {
                            return <div>
                                <Row>
                                    <Col md={8}>
                                        <div >
                                            {education?.courseDescription}
                                        </div>
                                    </Col>
                                    <Col md={4} className=" text-end text-highlight">
                                        <div>
                                            {education?.duration}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        })
                    }
                </CardBody>
            </Card>
        </>
    )
}