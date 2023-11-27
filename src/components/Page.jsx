import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useEffect, useRef} from 'react'
function Page({design, details, education, experience}) {
    const pageElementRef = useRef(null);
    const gridContainerRef = useRef(null);
    const fixedPageWidth = 375;

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

    return (
        <div className="page-container" ref={gridContainerRef}>
        {(design.layout == 'one') ? (
            <div ref={pageElementRef} className={`page ${design.layout} ${design.theme} ${design.typography}`}>
                <div className="banner">
                    <h1>Brodie <br/> Hunt </h1>
                    <div>Fullstack Web Developer</div>
                </div>
                    <div className="info">
                        <div className="phone">
                            <PhoneIcon />
                            <p>0401810414</p>
                        </div>
                        <div className="email">
                            <EmailIcon />
                            <p>brodiehunt7@gmail.com</p>
                        </div>
                        <div className="address">
                            <LocationOnIcon />
                            <p>Sydney, Australia</p>
                        </div>
                    </div>
                    <div className="profile">
                        <h2>Profile</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi molestias, 
                            fugiat vero nemo quae obcaecati, pariatur velit impedit dolore commodi recusandae 
                            harum natus provident delectus.
                        </p>
                    </div>
                    <div className="skills">
                        <ul className="skillsList">
                            <li>Boss</li>
                            <li>Boss</li>
                            <li>Boss</li>
                            <li>Boss</li>
                            <li>Boss</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <div className="education-item">
                            <div className="university">
                                University of Sydney
                            </div>
                            <div className="degree">
                                Bachelor of Computer Science
                            </div>
                            <div className="date">
                                <div className="start">
                                    08/2020
                                </div>
                                -
                                <div className="end">
                                    08/2020
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <h2>Experience</h2>
                        <div className="experience-item">
                            <div className="company">
                                Atlassian
                            </div>
                            <div className="role">
                                Junior Front-end Engineer
                            </div>
                            <div className="date">
                                <div className="start">
                                    08/2020
                                </div>
                                -
                                <div className="end">
                                    08/2020
                                </div>
                            </div>
                            <div className="description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod asperiores 
                                provident voluptatibus tempore repudiandae earum accusamus. Quis doloribus 
                                voluptatem, perspiciatis quo neque repudiandae nemo. Fugit.
                            </div>
                        </div>
                    </div>
            </div>
        )
        : 
        (
            <div className="page two">
            </div>
        )}
        </div>
    )
}

export default Page;