import React, { RefObject } from "react";
import { Container, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import profilePhoto from "../public/assets/Ajey-photo.png"

interface Props {
    summaryCard: React.RefObject<HTMLDivElement>;
    skillsCard: React.RefObject<HTMLDivElement>;
    ProfessionExpCard: React.RefObject<HTMLDivElement>;
    PersonalProjectCard: React.RefObject<HTMLDivElement>;
    educationCard: React.RefObject<HTMLDivElement>;
    certification: React.RefObject<HTMLDivElement> | undefined;
}

export default function NavBar(cards: Props) {
    const HandleClick = (obj: RefObject<HTMLDivElement> | undefined) => {
        if (obj && obj.current) {
            obj.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
            <Container>
                <Nav className="ml-auto">
                    <Image src={profilePhoto} alt="50*50" width="40" height="40" roundedCircle></Image>
                    <NavbarBrand className="mx-3">
                        Ajey Pandiyaraj
                    </NavbarBrand>
                    <Nav.Link href="#home" onClick={() => HandleClick(cards.summaryCard)} className="text-white pt-2"> Summary </Nav.Link>
                    <Nav.Link href="#home" onClick={() => HandleClick(cards.skillsCard)} className="text-white pt-2"> Technical Skills </Nav.Link>
                    <Nav.Link href="#home" onClick={() => HandleClick(cards.ProfessionExpCard)} className="text-white pt-2"> Professional Experience </Nav.Link>
                    <Nav.Link href="#home" onClick={() => HandleClick(cards.PersonalProjectCard)} className="text-white pt-2"> Personal Projects </Nav.Link>
                    <div>
                        {cards.certification && <Nav.Link href="#home" onClick={() => HandleClick(cards.certification)} className="text-white pt-2"> Certifications </Nav.Link>}
                    </div>
                    <Nav.Link href="#home" onClick={() => HandleClick(cards.educationCard)} className="text-white pt-2"> Education </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
} 