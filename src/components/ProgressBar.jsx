import React from 'react'

const ProgressBar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: '100%',
        // backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 7
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 20,
        color: 'black',
        fontWeight: 700,
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv} className='relative'>
                <span style={progresstext} className='absolute bottom-[-3.75svh]'>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;