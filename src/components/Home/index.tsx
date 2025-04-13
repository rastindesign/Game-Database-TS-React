import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'components/hoc/withErrorBoundary'

const Home = (): ReactElement => <GameList />

export default withErrorBoundary(Home)
