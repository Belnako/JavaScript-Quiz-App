const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Welche Datenübertragungsraten sind heute in lokalen Netzen verfügbar?',
    answers: [
      { text: '10 Mbit/s - 100 Gbit/s', correct: true },
      { text: '10 Mbit/s - 100 Mbit/s', correct: false },
      { text: '10 Gbit/s - 400 Gbit/s', correct: false }
    ]
  },
  {
    question: '1k Byte = ...',
    answers: [
      { text: '1024', correct: true },
      { text: '1000', correct: false },
      { text: '2^10', correct: true },
      { text: '10^2', correct: false }
    ]
  },
  {
    question: 'USB 3.0 hat eine Datenübertragungsrate von',
    answers: [
      { text: '480 Mbit/s', correct: false },
      { text: '5 Gbit/s', correct: true },
      { text: '10 Gbit/s', correct: false },
      { text: '40 Gbit/s', correct: false }
    ]
  },
  {
    question: 'IEEE 1394 ist der Standard für welche Schnittstelle zur Datenübertragung?',
    answers: [
      { text: 'i.LINK', correct: true },
      { text: 'FireWire', correct: true },
      { text: 'Thunderbolt', correct: false }
    ]
  },
  {
    question: 'Wie schnell breiten sich Daten auf einer Kupferleitung aus?',
    answers: [
      { text: '2/3 Lichtgeschwindigkeit', correct: true },
      { text: '250 Mbit/s', correct: false }
    ]
  },
  {
    question: 'Eine MAC-Adresse hat ',
    answers: [
      { text: '48 Bit', correct: true },
      { text: '12 Bit', correct: false },
      { text: '14 Bit', correct: false }
    ]
  },
  {
    question: 'Die Netzwerktopologie',
    answers: [
      { text: 'ist die Art und Weise, wie ein Netzwerk verkabelt ist.', correct: true },
      { text: 'beschreibt die Nodes in einem Netzwerk.', correct: false }
    ]
  },
  {
    question: 'Eine IP-Adresse ',
    answers: [
      { text: '(Version 4) hat 12 Bit', correct: false },
      { text: '(Version 4) hat 48 Bit', correct: true },
      { text: '(Version 6) hat 128 Bit', correct: true },
      { text: '(Version 6) hat 48 Bit', correct: false }
    ]
  },
  {
    question: 'Aktuelle Netzwerkgeräte sind',
    answers: [
      { text: 'Router', correct: true },
      { text: 'Switch', correct: true },
      { text: 'Server', correct: false },
      { text: 'Client', correct: false }
    ]
  },
  {
    question: 'CSMA / CD bedeutet',
    answers: [
      { text: 'Carrier Sense Multiple Access / Collision Detection', correct: true },
      { text: 'Carrier Sense Multiple Access / Collision Avoidance', correct: false },
      { text: 'Carrier Sensoring Multiple Access / Collision Detection', correct: false }
    ]
  },
  {
    question: 'Soviel Daten können in einem Ethernet Frame gesendet werden:',
    answers: [
      { text: '128 - 1024 Byte', correct: false },
      { text: '46 - 1500 Byte', correct: true }
    ]
  },
  {
    question: 'Der Ethernat Netzwerkstandard ist definiert in:',
    answers: [
      { text: 'IEEE 802.1', correct: false },
      { text: 'IEEE 802.3', correct: true },
      { text: 'IEEE 1394', correct: false }      
    ]
  },
  {
    question: 'Eine VLAN ID hat:',
    answers: [
      { text: '48 Bit', correct: false },
      { text: '12 Bit', correct: true },
      { text: '4096 mögliche VLANS', correct: true }      
    ]
  }
]