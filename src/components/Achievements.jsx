
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState,useEffect } from 'react';
import "../styles/Achievements.css";
import { timelineItems } from './data';
const Achievements = () => {
    return (
        <>
            <main className='achievements d-flex justify-content-center px-3 flex-column align-items-center pt-5' id='achievements'>
                <section className='text-center py-5'>
                    <h2 className='skill-header fw-bold'>Achievements</h2>
                    <p className='skill-para'>Let's explore some of my key milestones.</p>
                </section>
                <section className='achieve-main'>
                    <VerticalTimeline layout='1-column-left' lineColor='rgba(0, 0, 0, 0.025)' animate={false}>
                        {
                            timelineItems.map((item,ind) => {
                                return (
                                    <section key={ind} data-aos="fade">
                                        <VerticalTimelineElement
                                        className="vertical-timeline-element-items"
                                        iconStyle={{ background: 'rgba(0, 0, 0, 0.05)'}}
                                        contentStyle={{ padding: '0px', height: '0px', marginblock: '0px', border: '0px' }}
                                        icon={<img src={item.url} className='achievement-icon'/>}
                                        key={ind}
                                    >
                                        <section className='timeline-content m-0 p-3 pt-0'>
                                            <h6 className='fw-bold'>{item.title}</h6>
                                            <div>{item.description}</div>
                                            <section className='d-flex justify-content-between'>
                                                <div>{item.date}</div>
                                                <div className='timeline-reward p-1 px-2 text-light m-1'>Reward : ₹{item.reward}</div>
                                            </section>
                                        </section>
                                    </VerticalTimelineElement>
                                    </section>
                                )
                            })
                        }
                    </VerticalTimeline>
                </section>
            </main>
        </>
    )
}
export default Achievements;
