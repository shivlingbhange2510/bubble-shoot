import {
  REMOVE_CIRCLE_FROM_QUEUE,
  REMOVED_FROM_CONTAINER,
  REMOVE_FROM_CONTAINER_ADD_IN_QUEUE,
  ADD_CIRCLE_IN_CONTAINER,
} from "./actionType";

export const removeFromQueue = (payload) => {
  return {
    type: REMOVE_CIRCLE_FROM_QUEUE,
    payload,
  };
};

export const removeFromContainer = (payload) => {
  return {
    type: REMOVED_FROM_CONTAINER,
    payload,
  };
};
export const addCircleInConatiner = (payload) => {
  return {
    type: ADD_CIRCLE_IN_CONTAINER,
    payload,
  };
};

export const conatinerToQueue = (payload) => {
  return {
    type: REMOVE_FROM_CONTAINER_ADD_IN_QUEUE,
    payload,
  };
}; 
