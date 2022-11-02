import { init, RematchRootState, RematchDispatch, Models } from "@rematch/core"
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading"
import dashboard from "./dashboard"

interface RootModel extends Models<RootModel> {
  dashboard: typeof dashboard
}

type FullModel = ExtraModelsFromLoading<RootModel>

const models = {
  dashboard,
} as RootModel

const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()],
} as any)

export default store
export type RootDispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>
