export interface Portfolio {
    summary: string;
    skills: Skills;
    professionalExperience: Experience[];
    personalProjects: PersonalProject[];
    education:Education[];
    certifications:Certification[];
}

export interface Skills {
    programming: string;
    software: string;
    frameworks: string;
    database: string;
    designPatterns: string;
    productivityTools: string;
    extra:string;
}

export interface Experience {
    jobTitle: string;
    companyName: string;
    duration: string;
    productName: string;
    projectDescription: string[];
    projectLink: string;
}

export interface PersonalProject {
    projectName: string;
    projectDescription: string[];
    ProjectLink: string;
}

export interface Education {
    collegeName: string;
    courseName: string;
    duration: string;
    courseDescription:string[];
}

export interface Certification {
    certificationName: string
    certificationLink: string
}