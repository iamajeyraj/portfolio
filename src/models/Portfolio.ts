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
    projectLink: ProjectReference[] | undefined;
}

export interface ProjectReference{
    linkType:string;
    linkName:string;
    linkDesc:string;
    linkUrl:string;
}

export interface PersonalProject {
    projectName: string;
    projectDescription: string[];
    projectLink: ProjectReference[] | undefined;
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