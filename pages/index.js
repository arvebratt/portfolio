import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import Home from '../components/sections/Home';
import Coding from '../components/sections/Coding';
import Art from '../components/sections/Art';
import Contact from '../components/sections/Contact';
import Menu from '../components/Menu';
import styled from 'styled-components';

const App = () => {
    // const [selectedSection, setSelectedSection] = useState(1)

    //   const onLeave = (origin, destination, direction) => {
    //     setSelectedSection(destination.index + 1)
    //   }

    //   const moveTo = (section) => {
    //     fullpage_api.moveTo(section);
    //   }

    return (
        <div className='App'>
            <Head>
                <title>My styled page</title>
                <link rel='icon' href='../public/favicon.ico' />
                <link href='/static/styles.css' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap'
                    rel='stylesheet'
                />
            </Head>
            {/* <Menu moveTo={moveTo} selected={selectedSection}/> */}
            <ReactFullpage
                navigation
                // onLeave={onLeave}
                render={(comp) =>
                    console.log('render prop change') || (
                        <ReactFullpage.Wrapper>
                            <div
                                className='section'
                                style={{ backgroundColor: '#FFFAFA' }}
                            >
                                <Home />
                            </div>
                            <div
                                className='section'
                                style={{ backgroundColor: '#FFFAFA' }}
                            >
                                <Coding />
                            </div>
                            <div
                                className='section'
                                style={{ backgroundColor: '#FFFAFA' }}
                            >
                                <Art />
                            </div>
                            <div className='section'>
                                <Contact />
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </div>
    );
};

export default App;
