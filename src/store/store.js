import { createStore } from '../../node_modules/vuex'

export const store = createStore({
  strict: true,
  state() {
    return {
      userNotes: [],
      visibleForm: false,
      loading: false,
      success: false,
      // favouriteNotes: [],
      // trashedNotes: [],
      // isNoteEmpty: true,
      // isNoteNew: true,
      // noteId: '',
      // noteTitle: '',
      // noteText: '',
      // noteImages: [],
      // noteTheme: 'dark'
      // noteFont: "glacial",
      // noteIsFavourite: false
    }
  },

  mutations: {
    getNotes(state, payload) {
      state.userNotes = payload.reverse();
    },

    addNote(state, payload) {
      state.userNotes.unshift(payload);
    },

    deleteNote(state, payload) {
      state.userNotes.splice(
        0,
        state.userNotes.length,
        ...state.userNotes.filter((note) => note.id !== payload)
      );
    },

    visibleForm(state, payload) {
      state.visibleForm = payload;
    },

    loading(state, payload) {
      state.loading = payload;
    },

    success(state, payload) {
      state.success = payload
    },

    // noteIsEmpty(state, payload) {
    //   state.isNoteEmpty = payload
    // },

    // noteIsNew(state, payload) {
    //   state.isNoteNew = payload
    // },

    // setNoteTitle(state, payload) {
    //   state.noteTitle = payload
    // },

    // setNoteText(state, payload) {
    //   state.noteText = payload
    // },

    // addNoteImages(state, payload) {
    //   state.noteImages.push(payload)
    // },

    // setNoteTheme(state, payload) {
    //   state.noteTheme = payload
    // },

    // setNoteFont(state, payload) {
    //   state.noteFont = payload
    // },

    // toggleFavourite(state) {
    //   state.noteIsFavourite = !state.noteIsFavourite
    // },

    // createOrTrash(state, payload) {
    // 	const newNote = {
    // 		id: new Date().toISOString(),
    // 		title: state.noteTitle.trim(),
    // 		text: state.noteText,
    // 		images: state.noteImages,
    // 		theme: state.noteTheme,
    // 		font: state.noteFont,
    // 		favourite: state.noteIsFavourite
    // 	}

    // 	if (payload === "create") {
    // 		state.userNotes.unshift(newNote);
    // 	} else if(payload === "trash"){
    // 		state.trashedNotes.unshift(newNote);
    // 	}
    // },

    createNote(state) {
      const newNote = {
        title: state.noteTitle,
        text: state.noteText
      }
      state.userNotes.unshift(newNote)
    },

    editNote(state, payload) {
      state.noteId = payload.id
      state.noteTitle = payload.title
      state.noteText = payload.text
      state.noteImages = payload.images
      state.noteTheme = payload.theme
      state.noteFont = payload.font
      state.noteIsFavourite = payload.favourite
    },

    // updateNote(state) {
    // 	const noteToUpdate = findNote(state.userNotes, state.noteId);
    // 	Object.assign(noteToUpdate, {
    // 		title: state.noteTitle.trim(),
    // 		text: state.noteText,
    // 		images: state.noteImages,
    // 		theme: state.noteTheme,
    // 		font: state.noteFont,
    // 		favourite: state.noteIsFavourite
    // 	});
    // },

    resetNote(state) {
      state.noteId = ''
      state.noteTitle = ''
      state.noteText = ''
      state.noteImages = []
      state.noteTheme = 'dark'
      state.noteFont = 'glacial'
      state.noteIsFavourite = false
    }

    // trashNote(state) {
    // 	const noteToTrash = findNote(state.userNotes, state.noteId);
    // 	state.trashedNotes.unshift(noteToTrash);
    // 	state.userNotes = filterNotes(state.userNotes, noteToTrash.id);
    // 	state.favouriteNotes = state.userNotes.filter(note => note.favourite);
    // },

    // restoreNote(state) {
    // 	const noteToRestore = findNote(state.trashedNotes, state.noteId);
    // 	state.userNotes.unshift(noteToRestore);
    // 	state.trashedNotes = filterNotes(state.trashedNotes, noteToRestore.id);
    // },

    // removeEmptyNote(state) {
    // 	state.userNotes = filterNotes(state.userNotes, state.noteId);
    // },

    // deleteNoteImages(state, payload) {
    // 	state.noteImages.splice(payload, 1);
    // },

    // deleteNotes(state, payload) {
    // 	if (payload === "one") {
    // 		state.trashedNotes = filterNotes(state.trashedNotes, state.noteId);
    // 	} else if (payload === "all") {
    // 		state.trashedNotes = [];
    // 	}
    // },

    // addFavouriteNotes(state) {
    //   state.favouriteNotes = state.userNotes.filter((note) => note.favourite)
    // }
  }

  // actions: {
  //   moveToTrash({ state, commit }) {
  //     if (state.isNoteNew) {
  //       commit('createOrTrash', 'trash')
  //       commit('resetNote')
  //     } else {
  //       commit('updateNote')
  //       commit('trashNote')
  //     }

  //     commit('resetNote')
  //     commit('visibleForm', false)
  //   },

  //   restoreFromTrash({ commit }) {
  //     commit('restoreNote')
  //     commit('resetNote')
  //     commit('visibleForm', false)
  //     commit('addFavouriteNotes')
  //   },

  //   exitNote({ state, commit }, page) {
  //     if (page !== 'trash') {
  //       if (!state.isNoteEmpty) {
  //         if (state.isNoteNew) {
  //           commit('createOrTrash', 'create')
  //         } else {
  //           commit('updateNote')
  //         }
  //         commit('addFavouriteNotes')
  //       } else {
  //         if (!state.isNoteNew) {
  //           commit('removeEmptyNote')
  //           commit('addFavouriteNotes')
  //         }
  //       }
  //     }

  //     commit('resetNote')
  //     commit('visibleForm', false)
  //   },

  //   emptyTrash({ commit }, payload) {
  //     commit('deleteNotes', payload)
  //     commit('resetNote')
  //   }
  // }
})
