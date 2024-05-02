import { PersonalProject, ProjectReference } from "../models/Portfolio";
import { Button, Card, CardBody, CardHeader, CardTitle, Row, Table } from "react-bootstrap";

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
                        personalProject?.map((projects: PersonalProject) => {
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
                                <Row>
                                    <h5 className="text-black">Project Link:</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }} className="text-black">
                                        {projects?.projectLink?.map((projectRef: ProjectReference | undefined, index: number) => (
                                            <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                                {projectRef && (
                                                    <>
                                                        {projectRef.linkDesc}{' '}
                                                        <Button target="bank" href={projectRef.linkUrl} variant="success" style={{ marginLeft: '0px' }}>
                                                            {projectRef.linkName} <i className="bi bi-file-play-fill"></i>
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </Row>
                            </div>
                        })
                    }
                </div>
            </CardBody>
        </Card>
    )
}