import { Store } from '../node_modules/vuex'

declare module '@vue/runtime-core' {
  interface Note {
    title: string,
    text: string,
    id: number,
  }
  // declare your own store states
  interface State {
    userNotes: Array<Note>,
    visibleForm: boolean,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}