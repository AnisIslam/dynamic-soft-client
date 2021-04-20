import React from 'react';
import Sample from './Sample';
import sample1 from "../../../images/soft1.PNG"
import sample2 from "../../../images/soft2.PNG"
import sample3 from "../../../images/soft3.PNG"
import './WorkSample.css'

const workSampleData = [
    {

        "title": "AI Project",
        "description":
            " Lorem ipsum dolor sit amet consectetur ",
          "img": `${sample1}`,

    },
    {

        "title": "Data Analysis Software",
        "description":
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "img": `${sample2}`,

    },
    {

        "title": "Desktop Application for Telecom",
        "description":
            " Lorem ipsum dolor sit amet consectetur adipisicing.",
        "img": `${sample3}`,

    }
];

const WorkSample = () => {
    return (
        <section className='rounded mt-1 p-3 work-sample-container'>
            <div className='text-center'>
                <h2 style={{ color: '#1CC7C1' }}>OUR WORK SAMPLE</h2>
            </div>

            <div className="d-flex  justify-content-center">
                <div className="row mt-3">
                    {
                        workSampleData.map(sample => <Sample sample={sample}></Sample>)
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkSample;