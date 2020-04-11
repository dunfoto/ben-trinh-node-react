import React from 'react';
import SubComponent from 'components/SubComponent';
import { Table } from 'react-bootstrap';
import ProcessBar from 'components/ProcessSkill';

const HomePagePages = React.memo(() => {
    return (
        <div className="container c-container-carousel">
            <div className="row">
                <div className="col-md-8 c-main-cv">
                    <SubComponent
                        header="Objective"
                        description={`
                            <p>Become a React expert.</p>
                            <p>I want to create something interesting. This system can help many others.</p>
                        `}
                    />
                    <hr />
                    <i className="fas fa-lightbulb fa-2x" /> <b className="h2">EDUCATION</b>
                    <SubComponent
                        title="HO CHI MINH UNIVERSITY OF TECHNOLOGY"
                        startTime="SEP 2015"
                        endTime="NOW"
                        description={`
                            <p>Major: Computer Sciences</p>
                        `}
                    />
                    <hr />
                    <i className="fas fa-users fa-2x" /> <b className="h2">Work Experience</b>
                    <SubComponent
                        title="VINOVA PTE.LTD"
                        summary="Full-stack developer"
                        startTime="OCT 2018"
                        endTime="MAR 2020"
                        description={`
                            <p>Main responsibilities:</p>
                            <ul>
                                <li>Design, develop and maintain software</li>
                                <li>Work in cross functional teams with product managers, UX designers and QA engineers to ship software on-quality.</li>
                                <li>Building reusable components and front-end libraries for future use.</li>
                                <li>Optimizing components for maximum performance across browsers.</li>
                                <li>Upgrading front-end teams.</li>
                            </ul>
                            <p>Recognition and Gains:</p>
                            <ul>
                                <li>Be the project leader.</li>
                                <li>I can use React fluently.</li>
                                <li>I know about the software development process.</li>
                                <li>I learn new programming languages very quickly.</li>
                            </ul>
                        `}
                    />
                    <hr />
                    <i className="fas fa-star fa-2x" /> <b className="h2">Activites</b>
                    <SubComponent
                        title="VINOVA PTE.LTD"
                        summary="Member of GOfix project"
                        startTime="OCT 2018"
                        endTime="MAY 2019"
                        description={`
                            <ul>
                                <li>Maintain software and integrate new feature.</li>
                                <li>Build Restful APIs.</li>
                                <li>Used Ruby on Rails and React in project.</li>
                            </ul>
                        `}
                    />
                    <SubComponent
                        title="VINOVA PTE.LTD"
                        summary="Member of MerchFoundry project"
                        startTime="FEB 2019"
                        endTime="APR 2019"
                        description={`
                            <ul>
                                <li>Maintain software and integrate new feature.</li>
                                <li>Build Restful APIs.</li>
                                <li>Used Ruby on Rails and Vue in project.</li>
                            </ul>
                        `}
                    />
                    <SubComponent
                        title="VINOVA PTE.LTD"
                        summary="Member of ThelivingOS project"
                        startTime="SEP 2019"
                        endTime="MAR 2020"
                        description={`
                            <ul>
                                <li>Build UI and integrate apis using React Typescript.</li>
                                <li>Optimize and improvement project.</li>
                                <li>Support back-end team build apis.</li>
                                <li>Used React Typescript and NestJS in project.</li>
                            </ul>
                        `}
                    />
                </div>
                <div className="col-md-4 c-main-avatar">
                    <div className="row justify-content-center mt-4">
                        <img
                            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/84634756_1853236188141892_8909589263876620288_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=8hon9Zw00LkAX9Tmw6l&_nc_ht=scontent-sin6-2.xx&oh=b5b9d48db180b03d5c44de3d484ecc70&oe=5EB17B5F"
                            width="90%"
                            height="250px"
                            className="img-avatar-resume"
                            alt="Avatar Resume"
                        />
                    </div>
                    <div className="row justify-content-end pr-4 pl-4 pb-0 pt-2">
                        <h3 className="style-font-full-name">Trinh Minh Dung</h3>
                        <h6 className="style-font-work">FullStack Developer</h6>
                    </div>
                    <div className="row pr-4 pl-4 pb-0 pt-0 justify-content-center c-avatar-infomation">
                        <Table>
                            <tbody className="pt-2 pb-2">
                                <tr>
                                    <td><i className="far fa-calendar-alt"></i></td>
                                    <td>FEB 11, 1997</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-user"></i></td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-phone-alt"></i></td>
                                    <td>+84 981 867 773</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-envelope"></i></td>
                                    <td>
                                        <p>dunfoto@gmail.com</p>
                                        <p>dungtm112@outlook.com</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-map-marked-alt"></i></td>
                                    <td>Ho Chi Minh, VietNam</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-linkedin"></i></td>
                                    <td>/in/dũng-trịnh-b9a6a5152</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="row c-skill pr-2 pl-2 mb-3">
                        <h3 className="mr-auto ml-auto mt-3">Skill</h3>
                        <ProcessBar title="React" now={4} />
                        <ProcessBar title="Node" now={3} />
                        <ProcessBar title="HTML" now={4} />
                        <ProcessBar title="CSS" now={3} />
                        <ProcessBar title="JS" now={4} />
                        <ProcessBar title="Ruby on Rails" now={3} />
                        <ProcessBar title="Communicate" now={4} />
                        <ProcessBar title="Photoshop" now={3} />
                        <ProcessBar title="English" now={3} />
                    </div>
                    <div className="row c-skill pr-2 pl-2 mb-3">
                        <h3 className="mt-3 mr-auto ml-auto">INTERESTS</h3>
                        <div className="col-12 justify-content-center">
                            <ul>
                                <li>Reading books</li>
                                <li>Soccer</li>
                                <li>Music</li>
                                <li>Play video games</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default HomePagePages;