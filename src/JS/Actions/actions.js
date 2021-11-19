import { EDIT, ADD, CHECKED } from "../Constants/actions-types";

export const add = (NewTask) => {
  return { type: ADD, payload: NewTask };
};
export const edit = (NewDescription, id) => {
  return { type: EDIT, payload: { NewDescription, id } };
};
export const checked = (id) => {
  return { type: CHECKED, payload: id };
};
