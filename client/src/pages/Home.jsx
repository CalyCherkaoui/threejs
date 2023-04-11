import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import state from '../store'
import { CustomButton } from '../components'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

function Home() {
  const snap = useSnapshot(state);
  return (
    // enables the animation of components that have been removed from the tree.
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          {/* first thing to see on the screen */}
          <motion.header {...slideAnimation('down')}>
            <img
              src="./threejs.png"
              alt="logo"
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                OFFICIAL <br className='xl:block hidden'/> BOUTIQUE.
              </h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                <strong>Unleash your creativity</strong>
                and design your own unique and awesome shirt with our brand-new 3D tool
              </p>

            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home