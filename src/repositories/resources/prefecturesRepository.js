import Repository from '../Repository'

const RESOURCE = '/prefectures'

export const prefecturesRepository = {
  get: async () => {
    const { data } = await Repository.get(RESOURCE)
    return data
  }
}
