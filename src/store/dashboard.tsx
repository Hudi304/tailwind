import { RematchDispatch } from "@rematch/core"


type State = Readonly<{
  current: any[]
}>

const model = {
  state: {} as State,
  reducers: {
    loaded: (state: State, payload: any): State => ({
      ...state,
      current: payload,
    }),
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    async fetchDashboardData(payload: any) {
      dispatch.dashboard.loaded(payload)
    },
  }),
}

export default model
