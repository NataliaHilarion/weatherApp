import currentWeather from './current-time.js'
import WeeklyWeather from './weekly-weather.js'
import { viewportSize } from './utils/viewport.js'
import './tabs.js'

const $app = document.querySelector('#app')
const $loading = document.querySelector('#loading')

viewportSize($app)
viewportSize($loading)

currentWeather()
WeeklyWeather()