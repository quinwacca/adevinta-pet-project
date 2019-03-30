import React from 'react'
import PropTypes from 'prop-types'
// import fetch from 'isomorphic-fetch'
import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import AtomImage, {urlImageSkeleton} from '@s-ui/react-atom-image'

const DetailPage = props => {
  const url = 'https://cdn.thegamesdb.net/images/medium/'
  const srcCoverGame = `${url}${props.boxartUrl}`

  return (
    <div>
      <h1>Detail Page</h1>
      <Link to="/">Ir a la home</Link>
      <h2>{props.game_title}</h2>
      <AtomImage
        src={srcCoverGame}
        alt={props.game_title}
        skeleton={urlImageSkeleton}
      />
      <p>{props.overview}</p>
    </div>
  )
}

DetailPage.propTypes = {
  game_title: PropTypes.string,
  overview: PropTypes.string,
  boxartUrl: PropTypes.string
}

DetailPage.renderLoading = () => <AtomSpinner type={AtomSpinnerTypes.FULL} />

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {
    params: {gameId}
  } = routeInfo
  return domain
    .get('detail_games_use_case')
    .execute({gameId})
    .then(response => {
      return response
    })
}

export default DetailPage

// DetailPage.getInitialProps = ({
//   routeInfo: {
//     params: {gameId}
//   }
// }) => {
//   console.log(gameId)
//   return fetch(`https://shielded-hamlet-42041.herokuapp.com/api/game/${gameId}`)
//     .then(res => res.json())
//     .then(result => {
//       console.log(result)
//       return result
//     })
//     .catch(error => {
//       return {
//         errorMessage: error
//       }
//     })
// }
