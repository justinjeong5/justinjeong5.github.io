import produce from 'immer'
import {
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
  AUTHENTICATE_USER_REQUEST, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE,
  EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILURE,
  CONFIRM_USER_REQUEST, CONFIRM_USER_SUCCESS, CONFIRM_USER_FAILURE,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
  LOAD_CART_ITEMS_REQUEST, LOAD_CART_ITEMS_SUCCESS, LOAD_CART_ITEMS_FAILURE,
  REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,
} from './types'

const initialState = {
  currentUser: {},
  cartWithDetail: [],
  message: '',

  registerUserLoading: false,
  registerUserDone: false,
  registerUserError: null,
  loginUserLoading: false,
  loginUserDone: false,
  loginUserError: null,
  logoutUserLoading: false,
  logoutUserDone: false,
  logoutUserError: null,
  authenticateUserLoading: false,
  authenticateUserDone: false,
  authenticateUserError: null,
  confirmUserLoading: false,
  confirmUserDone: false,
  confirmUserError: null,
  editUserLoading: false,
  editUserDone: false,
  editUserError: null,
  addToCartLoading: false,
  addToCartDone: false,
  addToCartError: null,
  loadCartItemsLoading: false,
  loadCartItemsDone: false,
  loadCartItemsError: null,
  removeCartItemLoading: false,
  removeCartItemDone: false,
  removeCartItemError: null,
}

const user = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        draft.registerUserLoading = true;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        break;
      case REGISTER_USER_SUCCESS:
        draft.registerUserLoading = false;
        draft.registerUserDone = true;
        draft.message = action.payload.message;
        break;
      case REGISTER_USER_FAILURE:
        draft.registerUserLoading = false;
        draft.registerUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOGIN_USER_REQUEST:
        draft.loginUserLoading = true;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        break;
      case LOGIN_USER_SUCCESS:
        draft.loginUserLoading = false;
        draft.loginUserDone = true;
        draft.currentUser.userId = action.payload.userId;
        draft.message = action.payload.message;
        break;
      case LOGIN_USER_FAILURE:
        draft.loginUserLoading = false;
        draft.loginUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOGOUT_USER_REQUEST:
        draft.logoutUserLoading = true;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.logoutUserLoading = false;
        draft.logoutUserDone = true;
        draft.currentUser = {};
        draft.message = action.payload.message;
        break;
      case LOGOUT_USER_FAILURE:
        draft.logoutUserLoading = false;
        draft.logoutUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case AUTHENTICATE_USER_REQUEST:
        draft.authenticateUserLoading = true;
        draft.authenticateUserDone = false;
        draft.authenticateUserError = null;
        break;
      case AUTHENTICATE_USER_SUCCESS:
        draft.authenticateUserLoading = false;
        draft.authenticateUserDone = true;

        draft.currentUser.userId = action.payload.userId;
        draft.currentUser.email = action.payload.email;
        draft.currentUser.name = action.payload.name;
        draft.currentUser.lastname = action.payload.lastname;
        draft.currentUser.image = action.payload.image;
        draft.currentUser.role = action.payload.role;
        draft.currentUser.cart = action.payload.cart;
        draft.currentUser.isAdmin = action.payload.isAdmin;
        draft.currentUser.isAuth = action.payload.isAuth;
        draft.currentUser.message = action.payload.message;

        draft.registerUserLoading = false;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        draft.loginUserLoading = false;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        draft.logoutUserLoading = false;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        draft.confirmUserLoading = false;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        draft.editUserLoading = false;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;
      case AUTHENTICATE_USER_FAILURE:
        draft.authenticateUserLoading = false;
        draft.authenticateUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case CONFIRM_USER_REQUEST:
        draft.confirmUserLoading = true;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        break;
      case CONFIRM_USER_SUCCESS:
        draft.confirmUserLoading = false;
        draft.confirmUserDone = true;
        draft.message = action.payload.message;
        break;
      case CONFIRM_USER_FAILURE:
        draft.confirmUserLoading = false;
        draft.confirmUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case EDIT_USER_REQUEST:
        draft.editUserLoading = true;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;
      case EDIT_USER_SUCCESS:
        draft.editUserLoading = false;
        draft.editUserDone = true;
        draft.currentUser.isAuth = true;
        draft.message = action.payload.message;
        break;
      case EDIT_USER_FAILURE:
        draft.editUserLoading = false;
        draft.editUserError = action.error.code;
        draft.message = action.error.message;
        break;
      case ADD_TO_CART_REQUEST:
        draft.addToCartLoading = true;
        draft.addToCartDone = false;
        draft.addToCartError = null;
        break;
      case ADD_TO_CART_SUCCESS:
        draft.addToCartLoading = false;
        draft.addToCartDone = true;
        draft.currentUser.cart = action.payload.cart;
        draft.message = action.payload.message;
        break;
      case ADD_TO_CART_FAILURE:
        draft.addToCartLoading = false;
        draft.addToCartError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_CART_ITEMS_REQUEST:
        draft.loadCartItemsLoading = true;
        draft.loadCartItemsDone = false;
        draft.loadCartItemsError = null;
        break;
      case LOAD_CART_ITEMS_SUCCESS:
        const data = action.payload.productDetails.map((item, index) => ({
          key: item._id,
          title: item.title,
          price: item.price,
          quantity: draft.currentUser.cart[index].quantity,
          totalPrice: draft.currentUser.cart[index].quantity * item.price,
          image: item.images[0].image,
          tags: [item.sort]
        }));

        draft.loadCartItemsLoading = false;
        draft.loadCartItemsDone = true;
        draft.cartWithDetail = data;
        draft.message = action.payload.message;
        draft.removeCartItemLoading = false;
        draft.removeCartItemDone = false;
        break;
      case LOAD_CART_ITEMS_FAILURE:
        draft.loadCartItemsLoading = false;
        draft.loadCartItemsError = action.error.code;
        draft.message = action.error.message;
        break;
      case REMOVE_CART_ITEM_REQUEST:
        draft.removeCartItemLoading = true;
        draft.removeCartItemDone = false;
        draft.removeCartItemError = null;
        break;
      case REMOVE_CART_ITEM_SUCCESS:
        draft.removeCartItemLoading = false;
        draft.removeCartItemDone = true;
        draft.currentUser.cart = action.payload.cart;
        draft.message = action.payload.message;
        break;
      case REMOVE_CART_ITEM_FAILURE:
        draft.removeCartItemLoading = false;
        draft.removeCartItemError = action.error.code;
        draft.message = action.error.message;
        break;
      default:
        break;
    }
  });
}

export default user;