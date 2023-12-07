import { Store } from '../node_modules/vuex'

declare module '@vue/runtime-core' {
  interface Note {
    title: string,
    text: string,
    id: number,
    theme: string,
    createdAt: string,
    isLiked: boolean,
  }
  // declare your own store states
  interface State {
    userNotes: Array<Note>,
    visibleForm: boolean,
    visiblePalette: boolean,
    loading: boolean,
    success: boolean,
    noteTheme: string,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}