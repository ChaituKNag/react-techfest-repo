import {
  FETCH_CATEGORY_INIT,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  UPDATE_SELECTED_CATEGORY,
  EXPAND_CATEGORY_ITEM
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ({
  loading: false,
  fetchError: null,
  data: [],
  selected: null
})

const processResponse = (payload) => {
  const newData = payload.filter(value => value.parent === 0)
                  .map(value => ({id: value.id, name: value.name, childrens: [], expanded: true}))
  let selectedCategory = 0
  payload.forEach(val => {
    let pId = val.parent
    if(pId){
      selectedCategory = !selectedCategory? pId: selectedCategory
      for(let i = 0; i< newData.length; i++){
        if(newData[i].id === pId){
          newData[i].childrens.push(val)
        }
      }
    }
  }
  )
  return {data: newData, selected: selectedCategory}
}

const fetchCategoryInit = (state) => () => ({ ...state, loading: true, fetchError: null })

const fetchCategorySuccess = () => (payload) => {
  const processedResponse = processResponse(payload)
  return {
    loading: false,
    fetchError: null,
    data: processedResponse.data,
    selected: processedResponse.selected
  }
}

const fetchCategoryError = (state) => (payload) => ({...state, loading: false, fetchError: payload.error})

const expandCategoryItem = (state) => (category) => {
  const data = state.data.map(value => {
    if(value.id === category.id){
      return {...value, expanded: !value.expanded}
    }
    return value
   })
   return {...state, data: data}
}


const updateSelectedCategory = (state) => (category) => ({
  ...state, selected: category.id
})

export const category = reducerOf({
  [FETCH_CATEGORY_INIT]: fetchCategoryInit,
  [FETCH_CATEGORY_SUCCESS]: fetchCategorySuccess,
  [FETCH_CATEGORY_ERROR]: fetchCategoryError,
  [EXPAND_CATEGORY_ITEM]: expandCategoryItem,
  [UPDATE_SELECTED_CATEGORY]: updateSelectedCategory
})(defaultState)