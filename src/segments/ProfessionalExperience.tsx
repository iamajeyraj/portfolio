import { Experience, ProjectReference } from "../models/Portfolio";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { useNavigate } from "react-router-dom";

interface Props {
    experiences: Experience[] | undefined;
}

export default function ProfessionalExperience({ experiences }: Props) {
    // let navigate = useNavigate();
    // const HandleExploreMore = (() => {
    //     let path = `/portfolio/project`;
    //     navigate(path);
    // });

    return (
        <>
            <Card className="border-0 shadow">
                <CardHeader className="bg-primary bg-gradient text-white">
                    <CardTitle >
                        Professional Experience
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    {
                        experiences?.map((expirence: Experience | undefined, index) => {
                            return <div>
                                {index > 0 && <hr />}
                                <Row>
                                    <Col md={4}>
                                        <div >
                                            <h5>{expirence?.companyName}</h5>
                                        </div>
                                    </Col>
                                    <Col md={4} className=" text-center text-highlight">
                                        <div>
                                            <h5>  {expirence?.jobTitle} </h5>
                                        </div>
                                    </Col>
                                    <Col md={4} className="font-weight-bold text-end">
                                        <div>
                                            <h5> {expirence?.duration}</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="pt-2">
                                    <h6 style={{ textDecorationLine: 'underline' }}>{expirence?.productName}</h6>
                                </div>
                                <div>
                                    <Table striped borderless hover>
                                        {
                                            expirence?.projectDescription.map((desc: string | undefined, descIndex: number) => {
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
                                            <h5>Project Link:</h5>
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {expirence?.projectLink?.map((projectRef: ProjectReference | undefined, index: number) => (
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
                            </div>
                        })
                    }
                </CardBody>
            </Card>
        </>
    )
}