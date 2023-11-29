import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useEffect, useRef} from 'react'
import '../styles/Template.css';
function Page({design, details, skills, education, experience}) {
    const pageElementRef = useRef(null);
    const gridContainerRef = useRef(null);
    const fixedPageWidth = 375;
    const [firstName, lastName] = details.fullName.split(' ');
    useEffect(() => {
        const scaleElement = () => {
            const gridContainer = gridContainerRef.current;
            const pageElement = pageElementRef.current;
        
            if (gridContainer && pageElement) {
                let naturalWidth = gridContainer.offsetWidth;
                if (naturalWidth > 1444) {
                    naturalWidth = (naturalWidth / 3 ) * 2;
                }
                const scaleFactor = naturalWidth / fixedPageWidth;
                pageElement.style.transform = `scale(${scaleFactor})`;
                pageElement.style.transformOrigin = 'top ';
            }
        }

        scaleElement()
        window.addEventListener('resize', scaleElement)

        return () => {
            window.removeEventListener('resize', scaleElement);

        };
    }, []);

    const educationItems = education.map((item) => {
        return (
            <div className="education-item" key={item.id}>
                <div className="university">
                    {item.school}
                </div>
                <div className="degree">
                    {item.degree}
                </div>
                <div className="date">
                    <div className="start">
                        {item.start}
                    </div>
                    -
                    <div className="end">
                        {item.end}
                    </div>
                </div>
            </div>
        )
    })
    const experienceItems = experience.map((item) => {
        return (
            <div className="experience-item" key={item.id}>
                <div className="company">
                    {item.companyName}
                </div>
                <div className="role">
                    {item.positionTitle}
                </div>
                <div className="date">
                    <div className="start">
                        {item.start}
                    </div>
                    -
                    <div className="end">
                        {item.end}
                    </div>
                </div>
                <div className="description">
                    {item.description}
                </div>
            </div>
        )
    })

    return (
        <div className="page-container" ref={gridContainerRef}>
        {(design.layout == 'layoutOne') ? (
            <div ref={pageElementRef} className={`page ${design.layout} ${design.theme} ${design.typography}`}>
                <div className="banner">
                    <h1><span>{firstName}</span><br/> {lastName} </h1>
                    <div>Fullstack Web Developer</div>
                </div>
                <div className="grid-container">
                    <div className="info">
                        <div className="phone">
                            <PhoneIcon className="icon"/>
                            <p>{details.phone}</p>
                        </div>
                        <div className="email">
                            <EmailIcon className="icon" />
                            <p>{details.email}</p>
                        </div>
                        <div className="address">
                            <LocationOnIcon className="icon" />
                            <p>{details.address}</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Profile</h2>
                        <p>
                            {details.profile}
                        </p>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul className="skillsList">
                            {skills.map((skill) => {
                                return (
                                    <li key={skill.id}>
                                        {skill.skill}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="experience">
                        <h2>Experience</h2>
                        {experienceItems}
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        {educationItems}
                    </div>
                </div>
            </div>
        )
        : 
        (
            <div className="page layoutTwo">
            </div>
        )}
        </div>
    )
}

export default Page;