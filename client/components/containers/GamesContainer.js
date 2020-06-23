import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchGamesThunk} from '../../store'
import GamesView from '../views/GamesView'

//Smart container
class GamesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllGames()
    console.log('componentDidMount')
  }

  render() {
    return <GamesView allGames={this.props.allGames} />
  }
}

// Map state to props
const mapStateToProps = state => {
  console.log({state})
  return {
    allGames: state.games.allGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllGames: () => dispatch(fetchGamesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer)
