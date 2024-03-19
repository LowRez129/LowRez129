import { LinkIcon, LinkIconContainer, ProfileContainer, ProfileDescription, ProfileHeader, ProfileName, ProfilePicture } from "./ProfileStyle";
import css_icon from "../../assets/css-3-svgrepo-com.svg";

export default function Profile () {
    return(
        <ProfileContainer>
            <ProfileHeader>Profile:</ProfileHeader>
            <ProfilePicture/>
            <LinkIconContainer>
            <ProfileName>LowRez129:</ProfileName>
                <LinkIcon src={css_icon}/>
                <LinkIcon src={css_icon}/>
                <LinkIcon src={css_icon}/>
            </LinkIconContainer>
            <ProfileDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean tempor, est a auctor semper, nisl nisi condimentum nunc, a finibus ex velit nec est. Cras varius pretium risus ac dignissim. 
                Aenean aliquam velit arcu, vitae sagittis lacus sollicitudin imperdiet. Aliquam eleifend condimentum porta. 
                Pellentesque urna sapien, sollicitudin eget mattis condimentum, bibendum non eros. In sed elit eget dolor ultricies elementum. 
                Suspendisse commodo enim ut bibendum suscipit. Praesent aliquam, ligula id laoreet mollis, magna massa sollicitudin nunc, et pulvinar libero arcu ac ante. Integer vitae eros a nibh ornare commodo sit amet viverra sapien. 
            </ProfileDescription>
        </ProfileContainer>
    )
}