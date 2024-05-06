'use client';
import { AdvancedBannerTop } from '@/components/AdvancedBannerTop';
import { Typewriter } from 'nextjs-simple-typewriter'
import { ParallaxProvider } from 'react-scroll-parallax';
import '@/styles/styles.css'

const HeroSection = () => {
    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

      //   "Line1": "ভাগ্যের সহায়তায়,",
  //   "Line2": "আছি পাশে বিশ্বস্ততায়",
  //   "Line3": "আছি পাশে বিশ্বস্ততায়",
  //   "Line4": "Thy commerce to persuade!"
  // },
  // "HeroText": {
  //   "Line1": "কিনে নাও কিঞ্চিৎ",
  //   "Line2": "না করিয়া বঞ্চিত"
  // },

    return (
        <>

            <div className="">
                <div className='flex min-h-[300vh] flex-col items-center justify-between p-24'>
                        <AdvancedBannerTop />
                        <div className="center full">
                            <h1 className="headline gray">Goodnight.</h1>
                        </div>

                </div>
                <h1>Hello</h1>
                {/* <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                /> */}
            </div>
        </>
    )
};

export default HeroSection;
