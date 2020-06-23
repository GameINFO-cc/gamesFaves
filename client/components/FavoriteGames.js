import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchFavoriteGamesThunk, removeFavoriteGameThunk} from '../store'

class FavoriteGames extends Component {
  componentDidMount() {
    console.log('MOUNTING')
    this.props.fetchFavoriteGames()
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#191919',
          color: 'white',
          overflowX: 'hidden'
        }}
      >
        <h1
          className=" p-2 bd-highlight"
          style={{
            background: '#1e272c',
            border: '1px solid black',
            color: 'white',
            textAlign: 'center'
          }}
        >
          Favorite Games
        </h1>
        <div
          className="all-games row"
          style={{
            display: 'flex',
            justifyContent: 'space-evenely',
            flexWrap: 'wrap',
            padding: '25px'
          }}
        >
          {this.props.favoriteGames && this.props.favoriteGames.length ? (
            this.props.favoriteGames.map(game => {
              console.log({game})

              return (
                <div
                  key={game.id}
                  className="col"
                  style={{
                    padding: '10px',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    display: 'inline-block'
                  }}
                >
                  <h4 style={{textAlign: 'center'}}>{game.name}</h4>
                  <img
                    style={{
                      borderRadius: '12px',
                      width: '20em',
                      height: '20em'
                    }}
                    id="game-poster"
                    className="poster"
                    src={
                      game.cover && game.cover.url
                        ? game.cover.url.replace('t_thumb', 't_720p')
                        : // ? game.cover.url.replace("t_thumb", "720_p")
                          'https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png'
                    }
                    alt="Game Cover"
                  />
                  <br />
                  <button
                    type="button"
                    onClick={() => this.props.removeFavoriteGame(game.id)}
                  >
                    Remove From Favorites
                  </button>
                </div>
              )
            })
          ) : (
            <div>No Favorite Games Were Found.</div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favoriteGames: state.games.favoriteGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFavoriteGames: () => dispatch(fetchFavoriteGamesThunk()),
    removeFavoriteGame: gameId => dispatch(removeFavoriteGameThunk(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteGames)
