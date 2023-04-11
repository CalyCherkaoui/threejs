import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import state from '../store'
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
          <motion.header>
            <img
              src="./threejs.png"
              alt="logo"
              className='w-8 h-8 object-contain'
            />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home