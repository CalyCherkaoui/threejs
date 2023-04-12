import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import {AnimatePresence, motion} from 'framer-motion'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage,reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes} from '../config/constants'
import {fadeAnimation, slideAnimation} from '../config/motion'
import { AIPicker, ColorPicker, FilePicker, CustomButton, Tab } from '../components'

function Customizer() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });


  // show tab content depending on the active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />
      case 'aipicker':
        return <AIPicker />
      case 'filepicker':
        return <FilePicker
          file={file}
          setFile={setFile}
        />
      default:
        return null;
    }
  }

  const handleDecals = (type, res) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = res;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }
  }

  const readFile = (type) => {
    reader(file)
      .then((res) => {
        handleDecals(type, res);
        setActiveEditorTab('');
      })
      .catch((err) => console.log(err));
  }
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() =>setActiveEditorTab(tab.name)}
                    />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className='absolute top-5 right-5 z-10'
            {...fadeAnimation}
          >
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => state.intro = true}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActivTab=""
                handleClick={() =>{}}
                />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer