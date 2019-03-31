import {UseCase} from '@s-ui/domain'

class SearchGamesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({query}) {
    return this._repository.getSearch({query})
  }
}

export default SearchGamesUseCase