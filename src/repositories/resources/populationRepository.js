import Repository from '../Repository'

const RESOURCE = '/population/composition/perYear'

export const populationRepository = {
  get: async (params) => {
    const { data } = await Repository.get(RESOURCE, {
      params
    })
    return data
  }
}
