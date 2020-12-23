import {
  LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE,
  UPLOAD_PRODUCT_REQUEST, UPLOAD_PRODUCT_SUCCESS, UPLOAD_PRODUCT_FAILURE,
  UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE,
  REMOVE_UPLOADED_IMAGE, RESET_UPLOAD_IMAGE,
  LOAD_PRODUCT_DETAILS_REQUEST, LOAD_PRODUCT_DETAILS_SUCCESS, LOAD_PRODUCT_DETAILS_FAILURE,
} from './types'

const initialState = {
  currentProduct: {},
  productData: [],
  message: '',
  skip: 0,
  limit: 8,
  noMoreProducts: false,
  fileData: [],

  loadProductsLoading: false,
  loadProductsDone: false,
  loadProductsError: null,
  uploadImageLoading: false,
  uploadImageDone: false,
  uploadImageError: null,
  uploadProductLoading: false,
  uploadProductDone: false,
  uploadProductError: null,
  loadProductDetailsLoading: false,
  loadProductDetailsDone: false,
  loadProductDetailsError: null,
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
        message: action.payload.message,
        productData: [...state.productData, ...action.payload.products],
        noMoreProducts: action.noMoreProducts,
        skip: state.limit + state.skip,
      }
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loadProductsLoading: false,
        loadProductsError: action.error.code,
        message: action.error.message,
      }
    case UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        uploadProductLoading: true,
        uploadProductDone: false,
        uploadProductError: null,
      }
    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        uploadProductLoading: false,
        uploadProductDone: true,
        message: action.payload.message,
      }
    case UPLOAD_PRODUCT_FAILURE:
      return {
        ...state,
        uploadProductLoading: false,
        uploadProductError: action.error.code,
        message: action.error.message,
      }
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        uploadImageLoading: true,
        uploadImageDone: false,
        uploadImageError: null,
      }
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageLoading: false,
        uploadImageDone: true,
        message: action.payload.message,
        fileData: [...state.fileData, action.payload.image],
      }
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadImageLoading: false,
        uploadImageError: action.error.code,
        message: action.error.message,
      }
    case REMOVE_UPLOADED_IMAGE:
      return {
        ...state,
        message: '선택한 이미지를 정상적으로 제거하였습니다.',
        fileData: state.fileData.filter((v, i) => (i !== action.payload))
      }
    case RESET_UPLOAD_IMAGE:
      return {
        ...state,
        message: '등록한 상품의 이미지 목록을 정상적으로 비웠습니다.',
        uploadImageLoading: false,
        uploadImageDone: false,
        uploadImageError: null,
        uploadProductLoading: false,
        uploadProductDone: false,
        uploadProductError: null,
        fileData: [],
      }
    case LOAD_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loadProductDetailsLoading: true,
        loadProductDetailsDone: false,
        loadProductDetailsError: null,
      }
    case LOAD_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loadProductDetailsLoading: false,
        loadProductDetailsDone: true,
        message: action.payload.message,
        currentProduct: action.payload.productDetails[0],
      }
    case LOAD_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loadProductDetailsLoading: false,
        loadProductDetailsError: action.error.code,
        message: action.error.message,
      }
    default:
      return state;
  }
}

export default jaymall;