import produce from 'immer'

import {
  LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE,
  UPLOAD_PRODUCT_REQUEST, UPLOAD_PRODUCT_SUCCESS, UPLOAD_PRODUCT_FAILURE,
  UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE,
  REMOVE_UPLOADED_IMAGE, RESET_UPLOAD_IMAGE,
  LOAD_PRODUCT_DETAILS_REQUEST, LOAD_PRODUCT_DETAILS_SUCCESS, LOAD_PRODUCT_DETAILS_FAILURE,
  RESET_PRODUCTS, SET_ALL_FILTERS_INFO,
} from './types'

const initialState = {
  currentProduct: {},
  productData: [],
  message: '',
  skip: 0,
  limit: 8,
  noMoreProducts: false,
  fileData: [],
  filters: {},
  orderBy: '',
  sortBy: '',

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
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PRODUCTS_REQUEST:
        draft.loadProductsLoading = true;
        draft.loadProductsDone = false;
        draft.loadProductsError = null;
        break;
      case LOAD_PRODUCTS_SUCCESS:
        draft.loadProductsLoading = false;
        draft.loadProductsDone = true;
        draft.message = action.payload.message;
        draft.productData = draft.productData.concat(action.payload.products);
        draft.noMoreProducts = action.noMoreProducts;
        draft.skip += draft.limit;
        break;
      case LOAD_PRODUCTS_FAILURE:
        draft.loadProductsLoading = false;
        draft.loadProductsError = action.error.code;
        draft.message = action.error.message;
        break;
      case UPLOAD_PRODUCT_REQUEST:
        draft.uploadProductLoading = true;
        draft.uploadProductDone = false;
        draft.uploadProductError = null;
        break;
      case UPLOAD_PRODUCT_SUCCESS:
        draft.uploadProductLoading = false;
        draft.uploadProductDone = true;
        draft.message = action.payload.message;
        break;
      case UPLOAD_PRODUCT_FAILURE:
        draft.uploadProductLoading = false;
        draft.uploadProductError = action.error.code;
        draft.message = action.error.message;
        break;
      case UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;
      case UPLOAD_IMAGE_SUCCESS:
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        draft.message = action.payload.message;
        draft.fileData = draft.fileData.concat(action.payload.images)
        break;
      case UPLOAD_IMAGE_FAILURE:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error.code;
        draft.message = action.error.message;
        break;
      case REMOVE_UPLOADED_IMAGE:
        draft.message = '선택한 이미지를 정상적으로 제거하였습니다.';
        draft.fileData = draft.fileData.filter((v, i) => (i !== action.payload));
        break;
      case RESET_UPLOAD_IMAGE:
        draft.message = '등록한 상품의 이미지 목록을 정상적으로 비웠습니다.';
        draft.uploadImageLoading = false;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        draft.uploadProductLoading = false;
        draft.uploadProductDone = false;
        draft.uploadProductError = null;
        draft.fileData = [];
        break;
      case LOAD_PRODUCT_DETAILS_REQUEST:
        draft.loadProductDetailsLoading = true;
        draft.loadProductDetailsDone = false;
        draft.loadProductDetailsError = null;
        break;
      case LOAD_PRODUCT_DETAILS_SUCCESS:
        draft.loadProductDetailsLoading = false;
        draft.loadProductDetailsDone = true;
        draft.message = action.payload.message;
        draft.currentProduct = action.payload.productDetails[0];
        break;
      case LOAD_PRODUCT_DETAILS_FAILURE:
        draft.loadProductDetailsLoading = false;
        draft.loadProductDetailsError = action.error.code;
        draft.message = action.error.message;
        break;
      case RESET_PRODUCTS:
        draft.productData = [];
        draft.noMoreProducts = false;
        draft.message = '상품목록이 초기회되었습니다.';
        break;
      case SET_ALL_FILTERS_INFO:
        draft.productData = [];
        draft.skip = action.payload.skip;
        draft.limit = action.payload.limit;
        draft.orderBy = action.payload.orderBy;
        draft.sortBy = action.payload.sortBy;
        draft.filters = action.payload.filters;
        draft.message = '삼품 검색 필터가 적용되었습니다.';
        break;
      default:
        break;
    }
  })
}

export default jaymall;