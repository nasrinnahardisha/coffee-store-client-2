// import React from 'react';
// import { Outlet } from 'react-router';
// import Header from '../Header';
// import Footer from '../Footer';

// const MainLayouts = () => {
//     return (
//         <div className='flex flex-col min-h-screen'>
//             <Header></Header>
//            <div className="flex-grow">
//         <Outlet />
//       </div>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default MainLayouts;
import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
           <div className="flex-grow">
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;