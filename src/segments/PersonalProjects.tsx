import React from "react";
import { PersonalProject } from "../models/Portfolio";
import { Card, CardBody, CardHeader, CardTitle, Table } from "react-bootstrap";

interface Props {
    personalProject: PersonalProject[] | undefined;
}

export default function PersonalProjects({ personalProject }: Props) {
    return (
        <Card className="text-white border-0 shadow">
            <CardHeader className="bg-primary bg-gradient">
                <CardTitle>
                    Personal Projects
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div>
                    {
                        personalProject?.map((projects: PersonalProject, index) => {
                            return <div>
                                <div className="pt-2">
                                    <h6 className="text-black" style={{ textDecorationLine: 'underline' }}>{projects?.projectName}</h6>
                                </div>
                                <Table striped borderless hover>
                                    {
                                        projects.projectDescription?.map((desc: string | undefined, descIndex: number) => {

                                            return <div key={descIndex}>
                                                <tr>
                                                    <td>
                                                        {descIndex + 1}.{desc}
                                                    </td>
                                                </tr>
                                            </div>
                                        })
                                    }
                                </Table>
                            </div>
                        })
                    }
                </div>
            </CardBody>
        </Card>
    )
}