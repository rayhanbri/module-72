import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 space-x-5'>
            {/* side navbar  */}
            <div className='col-span-3 '>
                i am side
            </div>
            {/* dashboard  */}
            <div className='col-span-9'>
                {children}
            </div>
            
        </div>
    );
};

export default DashBoardLayout;