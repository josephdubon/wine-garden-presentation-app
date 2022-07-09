import Head from 'next/head'
import Image from 'next/image'

import {animated, useSpring} from 'react-spring'

export default function Home() {
    // rect spring styles
    const styles = useSpring({
        from: { opacity: "0" },
        to: [
            { opacity: "1" },
            { opacity: "0"},
        ],
        config: { duration: "3200" },
        loop:true
    })

    return (
        <>
            <Head>
                <title>Wine Garden</title>
                <meta name='description' content='Wine Garden'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <main>

                <header>
                    {/* video */}
                    <video className='video-bg' autoPlay muted loop>
                        <source src='/video/wine-garden-animation-hd.mp4' type='video/mp4'/>
                    </video>

                    {/* video overlay */}
                    <div className='video-overlay'>
                        <div className='logo'>
                            <animated.div className='test' style={styles}>
                                <Image src={'/SVG/logo.svg'} width={'1200'} height={'500'} alt={'Wine Garden'}/>
                            </animated.div>
                        </div>
                    </div>

                </header>

                <main>
                    <h2>Wine Garden</h2>

                    <p className='description'>
                        WineGarden is a decentralized, DAO governed dApp built on the Cardano blockchain. We offer a
                        no-cost lottery that allows for regular winnings to be distributed automatically from multiple
                        token and coin pools. DAO governance gives token holders the opportunity to democratically enact
                        changes through vote to create exciting new variations in the no cost lottery system while
                        maintaining a self-sustaining business model.
                    </p>

                </main>

            </main>
        </>
    )
}
