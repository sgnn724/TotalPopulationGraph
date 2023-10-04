import { prefecturesRepository } from './resources/prefecturesRepository'
import { populationRepository } from './resources/populationRepository'

const repositories = {
  prefectures: prefecturesRepository,
  population: populationRepository
}

export const RepositoryFactory = {
  get: (name) => repositories[name]
}
