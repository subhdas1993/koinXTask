import React, { Suspense, lazy } from 'react'

const ABit = lazy(() => import('./subComponents/AboutBitcoin'));
const Menus = lazy(() => import('./subComponents/Menus'));
const Perform = lazy(() => import('./subComponents/Performance'));
const Sentiment = lazy(() => import('./subComponents/Sentiments'));
const Team = lazy(() => import('./subComponents/Team'));
const Tokenomics = lazy(() => import('./subComponents/Tokenomics'));
const TopGragh = lazy(() => import('./subComponents/TopGragh'));
const SubRightMainSection = lazy(() => import('./subComponents/SubRightMainSection'));

function MainSections() {
  return (
    <div className='flex justify-center'>
      <div className='w-11/12 lg:flex justify-between items-start'>
        <div className='lg:w-[70%] mt-4 lg:mr-4 max-lg:overflow-hidden'>
          <Suspense fallback={<>Loading</>}>
            <TopGragh />
          </Suspense>
          <div className='h-6'></div>
          <Suspense fallback={<>Loading...</>}>
            <Menus />
          </Suspense>
          <div className='h-6'></div>
          <Suspense fallback={<>Loading...</>}>
            <Perform />
          </Suspense>
          <div className='h-6'></div>
          <Suspense fallback={<>Loading...</>}>
            <Sentiment />
          </Suspense>
          <div className='h-6'></div>
          <Suspense fallback={<>Loading...</>}>
            <ABit />
          </Suspense>
          <div className='h-6'></div>
          <div className='max-lg:hidden'>
            <Suspense fallback={<>Loading...</>}>
              <Tokenomics />
            </Suspense>
          </div>
          <div className='h-6'></div>
          <Suspense fallback={<>Loading...</>}>
            <Team />
          </Suspense>
        </div>
        <div className='h-6'></div>
        <Suspense fallback={<>Loading...</>}>
          <SubRightMainSection />
        </Suspense>
      </div>
    </div>
  )
}

export default MainSections