// same as react context, it allow to define some flags
import {proxy} from 'valtio'

const state = proxy({
  intro: true, //are we currentely on the home page
  color: '#EFBD48', //default color
  isLogoTexture: true, //are we displaying the logo on our shirt
  isFullTexture: true,
  logoDecal: './threejs.png', //empty default values
  fullDecal: './threejs.png'//empty default values
})

export default state;