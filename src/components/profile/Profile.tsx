import { Button, ButtonContainer, Description, LinkIcon, LinkIconContainer, ProfileContainer, ProfileDescription, ProfileName, ProfilePicture } from "./ProfileStyle";
import github_icon from "../../assets/logo-github.svg";
import Skills from "../skills/Skills";
import { useState } from "react";
import ProjectsSection from "../projects/ProjectsSection";

export default function Profile () {
    const [index, setIndex] = useState(0);
    const AboutMe = <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean tempor, est a auctor semper, nisl nisi condimentum nunc, a finibus ex velit nec est. Cras varius pretium risus ac dignissim. 
        Aenean aliquam velit arcu, vitae sagittis lacus sollicitudin imperdiet. Aliquam eleifend condimentum porta. 
        Pellentesque urna sapien, sollicitudin eget mattis condimentum, bibendum non eros. In sed elit eget dolor ultricies elementum. 
        Suspendisse commodo enim ut bibendum suscipit. 
        Praesent aliquam, ligula id laoreet mollis, magna massa sollicitudin nunc, et pulvinar libero arcu ac ante. Integer vitae eros a nibh ornare commodo sit amet viverra sapien. 
    </Description>

    const Selected = [AboutMe, <Skills/>, <ProjectsSection/>];

    return(
        <ProfileContainer>
            <ProfilePicture src={github_icon}/>
            <ProfileName>LowRez129:</ProfileName>
            <LinkIconContainer>
                <LinkIcon onClick={() => window.location.href = "https://github.com/LowRez129"} src={github_icon}/>
                <LinkIcon src={github_icon}/>
                <LinkIcon src={github_icon}/>
            </LinkIconContainer>
            <ButtonContainer>
                <Button onClick={() => setIndex(0)}>About</Button>
                <Button onClick={() => setIndex(1)}>Skills</Button>
                <Button onClick={() => setIndex(2)}>Projects</Button>
            </ButtonContainer>
            <ProfileDescription>
                {Selected[index]}
            </ProfileDescription>
        </ProfileContainer>
    )
}