import {
  LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE,
} from './types'

const initialState = {
  productData: [],
  skip: 0,
  limit: 8,

  loadProductsLoading: false,
  loadProductsDone: false,
  loadProductsError: null,
  noMoreProducts: false,
}

const jaymall = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return {
        ...state,
        loadProductsLoading: true,
        loadProductsDone: false,
        loadProductsError: null,
      }
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadProductsLoading: false,
        loadProductsDone: true,
        productData: [...state.productData, ...action.payload.products],
        noMoreProducts: action.noMoreProducts,
        skip: state.limit + state.skip,
      }
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loadProductsLoading: false,
        loadProductsError: action.error
      }
    default:
      return state;
  }
}

export default jaymall;