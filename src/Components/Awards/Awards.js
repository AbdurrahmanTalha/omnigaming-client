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
                    <h2 className='fs-2 text-muted'>Best Computer seller In 2021.</h2>
                </div>
            </div>
            <div className='row d-flex align-items-center justify-content-center my-5'>
                <div className='col-md-6 borderLeft pe-5 mb-sm-4'>
                    <h2 className='fs-2 text-muted'>2nd Fastest Computer Made</h2>

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
                    <h2 className='fs-2 text-muted'>Most Sold Computers in the last decade</h2>
                </div>
            </div>
        </div>
    );
};

export default Awards;