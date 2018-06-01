import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, CREATE_NOTES, EDIT_NOTE } from './NoteActions';

import omit from 'lodash/omit';

const initialState = {};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };
    case EDIT_NOTE: {
      const note = { ...state[action.id], editing: true };
      return { ...state, [action.noteId]: note };
    }
    case DELETE_NOTE:
      return omit(state, action.noteId);
    case CREATE_NOTES:
      return { ...action.notes };
    default:
      return state;
  }
}
