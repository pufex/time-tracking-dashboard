const workTime = document.querySelector('#work-time')
const workPrevious = document.querySelector('#work-previous')

const playTime = document.querySelector('#play-time')
const playPrevious = document.querySelector('#play-previous')

const studyTime = document.querySelector('#study-time')
const studyPrevious = document.querySelector('#study-previous')

const exerciseTime = document.querySelector('#exercise-time')
const exercisePrevious = document.querySelector('#exercise-previous')

const socialTime = document.querySelector('#social-time')
const socialPrevious = document.querySelector('#social-previous')

const careTime = document.querySelector('#care-time')
const carePrevious = document.querySelector('#care-previous')

const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')

const toggleButton = (buttonId) =>{
  const btn = document.getElementById(buttonId);
  btn.
  return;
}

async function fetchAndParseJSON() {
  const response = await fetch('data.json')
  const json = await response.json()
  return json
}

async function funkcja() {
  const userData = await fetchAndParseJSON()
  console.log(userData);
  workTime.innerHTML = userData[0].timeframes.daily.current + ' hrs'
  workPrevious.innerHTML = userData[0].timeframes.daily.previous + ' hrs'

  playTime.innerHTML = userData[1].timeframes.daily.current + ' hrs'
  playPrevious.innerHTML = userData[1].timeframes.daily.previous + ' hrs'

  studyTime.innerHTML = userData[2].timeframes.daily.current + ' hrs'
  studyPrevious.innerHTML = userData[2].timeframes.daily.previous + ' hrs'

  exerciseTime.innerHTML = userData[3].timeframes.daily.current + ' hrs'
  exercisePrevious.innerHTML = userData[3].timeframes.daily.previous + ' hrs'

  socialTime.innerHTML = userData[4].timeframes.daily.current + ' hrs'
  socialPrevious.innerHTML = userData[4].timeframes.daily.previous + ' hrs'

  careTime.innerHTML = userData[5].timeframes.daily.current + ' hrs'
  carePrevious.innerHTML = userData[5].timeframes.daily.previous + ' hrs'

  daily.addEventListener('click', () => {
    workTime.innerHTML = userData[0].timeframes.daily.current + ' hrs'
    workPrevious.innerHTML = userData[0].timeframes.daily.previous + ' hrs'

    playTime.innerHTML = userData[1].timeframes.daily.current + ' hrs'
    playPrevious.innerHTML = userData[1].timeframes.daily.previous + ' hrs'

    studyTime.innerHTML = userData[2].timeframes.daily.current + ' hrs'
    studyPrevious.innerHTML = userData[2].timeframes.daily.previous + ' hrs'

    exerciseTime.innerHTML = userData[3].timeframes.daily.current + ' hrs'
    exercisePrevious.innerHTML = userData[3].timeframes.daily.previous + ' hrs'

    socialTime.innerHTML = userData[4].timeframes.daily.current + ' hrs'
    socialPrevious.innerHTML = userData[4].timeframes.daily.previous + ' hrs'

    careTime.innerHTML = userData[5].timeframes.daily.current + ' hrs'
    carePrevious.innerHTML = userData[5].timeframes.daily.previous + ' hrs'
  })
  weekly.addEventListener('click', () => {
    workTime.innerHTML = userData[0].timeframes.weekly.current + ' hrs'
    workPrevious.innerHTML = userData[0].timeframes.weekly.previous + ' hrs'

    playTime.innerHTML = userData[1].timeframes.weekly.current + ' hrs'
    playPrevious.innerHTML = userData[1].timeframes.weekly.previous + ' hrs'

    studyTime.innerHTML = userData[2].timeframes.weekly.current + ' hrs'
    studyPrevious.innerHTML = userData[2].timeframes.weekly.previous + ' hrs'

    exerciseTime.innerHTML = userData[3].timeframes.weekly.current + ' hrs'
    exercisePrevious.innerHTML = userData[3].timeframes.weekly.previous + ' hrs'

    socialTime.innerHTML = userData[4].timeframes.weekly.current + ' hrs'
    socialPrevious.innerHTML = userData[4].timeframes.weekly.previous + ' hrs'

    careTime.innerHTML = userData[5].timeframes.weekly.current + ' hrs'
    carePrevious.innerHTML = userData[5].timeframes.weekly.previous + ' hrs'
  })
  monthly.addEventListener('click', () => {
    workTime.innerHTML = userData[0].timeframes.monthly.current + ' hrs'
    workPrevious.innerHTML = userData[0].timeframes.monthly.previous + ' hrs'

    playTime.innerHTML = userData[1].timeframes.monthly.current + ' hrs'
    playPrevious.innerHTML = userData[1].timeframes.monthly.previous + ' hrs'

    studyTime.innerHTML = userData[2].timeframes.monthly.current + ' hrs'
    studyPrevious.innerHTML = userData[2].timeframes.monthly.previous + ' hrs'

    exerciseTime.innerHTML = userData[3].timeframes.monthly.current + ' hrs'
    exercisePrevious.innerHTML = userData[3].timeframes.monthly.previous + ' hrs'

    socialTime.innerHTML = userData[4].timeframes.monthly.current + ' hrs'
    socialPrevious.innerHTML = userData[4].timeframes.monthly.previous + ' hrs'

    careTime.innerHTML = userData[5].timeframes.monthly.current + ' hrs'
    carePrevious.innerHTML = userData[5].timeframes.monthly.previous + ' hrs'
  })
}

funkcja()
