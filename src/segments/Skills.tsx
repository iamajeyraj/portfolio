import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Table } from "react-bootstrap";
import { Skills } from "../models/Portfolio";

interface Props{
    skills:Skills | undefined;
}

export default function Skill({skills}:Props) {
    return (
        <Card className="border-0 shadow">
            <CardHeader className="bg-primary bg-gradient text-white">
                <CardTitle>
                    Technical Skills
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Programming</td>
                            <td>{skills && skills.programming}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Software and IDE</td>
                            <td>{skills &&  skills.software}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Backend & Web</td>
                            <td>{skills && skills.frameworks}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Cloud & Dtabase</td>
                            <td>{skills && skills.database}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Design Pattern</td>
                            <td>{skills && skills.designPatterns}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Productivity Tools</td>
                            <td>{skills && skills.productivityTools}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Other Experiences</td>
                            <td>{skills && skills.extra}</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}