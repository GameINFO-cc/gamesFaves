import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchGameThunk, addFavoriteGameThunk} from '../../store'

class GamesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({input: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.fetchGame(this.state.input)
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
          GAMES
        </h1>
        <form
          onSubmit={this.onSubmit}
          className="form-inline my-2 my-lg-0 d-flex justify-content-center"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <input
            onChange={this.onChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for game here!"
            aria-label="Search"
          />
          <button
            style={{backgroundColor: 'white', border: '2px solid black'}}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div
          className="all-games row"
          style={{
            display: 'flex',
            justifyContent: 'space-evenely',
            flexWrap: 'wrap',
            padding: '25px'
          }}
        >
          {this.props.allGames.map(game => {
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
                  onClick={() => this.props.addFavoriteGame(game.id)}
                >
                  Add To Favorites
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allGames: state.games.allGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: input => dispatch(fetchGameThunk(input)),
    addFavoriteGame: gameId => dispatch(addFavoriteGameThunk(gameId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesView)
