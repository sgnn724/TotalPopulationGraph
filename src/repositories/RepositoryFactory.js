import { prefecturesRepository } from './resources/prefecturesRepository'

const repositories = {
  prefectures: prefecturesRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}
