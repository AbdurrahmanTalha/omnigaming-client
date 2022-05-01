import React from 'react';
import './Awards.css';

const Awards = () => {
    return (
        <div className='container'>
            <h2 className='text-center d-inline-block borderClass my-3'>Awards We Won</h2>
            <div className='row d-flex align-items-center justify-content-center my-5'>
                <div className='col-md-6'>
                    <img alt='awards' className='w-100 img-fluid' src='https://cis.ieee.org/images/files/Branding/award.jpg' />
                </div>
                <div className='col-md-6 borderRight ps-5 mt-sm-4'>
                    <p className='fs-6 text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='row d-flex align-items-center justify-content-center my-5'>
                <div className='col-md-6 borderLeft pe-5 mb-sm-4'>
                    <p className='fs-6 text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
                <div className='col-md-6 '>
                    <img alt='awards' className='w-100 img-fluid' src='https://www.stpauls.qld.edu.au/wp-content/uploads/2021/11/Award.jpg' />
                </div>
            </div>
            <div className='row d-flex align-items-center justify-content-center my-5'>
                <div className='col-md-6'>
                    <img alt='awards' className='w-100 img-fluid' src='https://www.iflr.com/Media/images/iflr/1-awards/AdobeStock_135053351.jpeg' />
                </div>
                <div className='col-md-6 borderRight ps-5 mt-sm-4'>
                    <p className='fs-6 text-muted '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
};

export default Awards;