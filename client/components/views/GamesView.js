import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGameThunk} from '../../store'

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
            color: 'white'
          }}
        >
          GAMES
        </h1>
        <form
          onSubmit={this.onSubmit}
          className="form-inline my-2 my-lg-0 d-flex justify-content-center"
        >
          <input
            onChange={this.onChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for a game here!"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div
          className="all-games row "
          style={{display: 'flex', justifyContent: 'space-evenely'}}
        >
          {this.props.allGames.map(game => {
            return (
              <div key={game.id} className="col" style={{marginTop: '100px'}}>
                <h4 style={{paddingBottom: '50px'}}>{game.name}</h4>
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
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log({state})
  return {
    allGames: state.games.allGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: input => dispatch(fetchGameThunk(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesView)
