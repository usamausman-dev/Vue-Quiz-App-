import { createStore } from 'vuex'
import Data from '../assets/questions.json'

export default createStore({
  state: {
    questions: Data,
    current: 0,
    options: null,
    score: 0,
    isDisabled: false,
    remarks: false,

    maxScore: 0,
    minScore: 0,
  },
  mutations: {
    nextQuestion(state) {
      state.isDisabled = !state.isDisabled
      state.current++
      state.remarks = false
    },

    checkAnswer(state, index) {
      state.isDisabled = !state.isDisabled
      if (decodeURIComponent(state.options[index]) == decodeURIComponent(state.questions[state.current].correct_answer)) {
        state.score++
        state.remarks = true
      }
    },



  },
  actions: {
    nextQuestion({ commit }) {
      commit("nextQuestion")
    },
    checkAnswer: ({ commit }, index) => {
      commit('checkAnswer', index)
    },


  },
  getters: {
    setBarPercentage(state) {
      return (state.current / state.questions.length) * 100
    },

    setCurrentPercentage(state) {
      return (state.score / state.current) * 100
    },

    setMaxPercentage(state) {
      return ((state.score + (state.questions.length - state.current)) / state.questions.length) * 100
    },

    setMinPercentage(state) {
      return (state.score / state.questions.length) * 100
    },


    setOptions(state) {
      state.options = [...state.questions[state.current].incorrect_answers, state.questions[state.current].correct_answer]
      return state.options
    },
  },
  modules: {
  }
})
