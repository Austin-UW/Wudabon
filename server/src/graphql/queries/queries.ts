import {QueryResolvers} from '../types'
import {UserModel} from '../../models/User'

export const queries: QueryResolvers = {
  user: async(obj, args) => {
    const user = await UserModel.findOne({ id: args.id })

    if (user) {
      return user
    }

    throw new Error('proj not found')
  },
}
