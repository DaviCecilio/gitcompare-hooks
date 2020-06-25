import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { FaSearch } from 'react-icons/fa'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

import { ReposContext } from '../../services/repoContext'
import API from '../../services/api'
import CompareList from '../../components/compareList'
import { GetLocalRepositories, PutLocalRepositories } from '../../services/localStorage'

import { HomeStyles, FormHome } from './styles.js'
import LogoTitle from '../../assets/images/logoTitle.png'
import Loader from '../../assets/animations/loaderIcon.svg'

const Home = () => {
  const { repos, setRepos } = useContext(ReposContext),
    [inputRepository, setInputRepository] = useState(''),
    [repositoryError, setRepositoryError] = useState(false),
    [isLoader, setIsLoader] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoader(true)
    try {
      const { data: repository } = await API.get(`repos/${inputRepository}`)

      repository.lastCommit = moment(repository.pushed_at).fromNow()

      setRepos([...repos, repository])
      PutLocalRepositories(repository)
      setInputRepository('')
      setRepositoryError(false)
      setIsLoader(false)
    } catch (err) {
      setRepositoryError(true)
      setIsLoader(false)
      NotificationManager.error('Incorrect input', 'Error!!!', 2000)
    }
  }

  useEffect(() => {
    const result = GetLocalRepositories()

    if (result === 'error') {
      NotificationManager.error('Contact admin', 'Error!!!', 2000)
      return
    }
    if (result) {
      setRepos(JSON.parse(result))
    }
  }, [setRepos])

  return (
    <HomeStyles>
      <div className="wrapperTop mt-3">
        <img src={LogoTitle} alt="Logo - GITCOMPARE" />

        <FormHome
          withError={repositoryError}
          onSubmit={(e) => handleSubmit(e)}
          className="formSearch"
        >
          <input
            type="text"
            placeholder="User/Repository"
            value={inputRepository}
            onChange={(e) => setInputRepository(e.target.value)}
          />
          <button type="submit">
            {isLoader ? <img src={Loader} alt="loaderAnimation" /> : <FaSearch />}
          </button>
        </FormHome>
      </div>

      <CompareList />

      <NotificationContainer />
    </HomeStyles>
  )
}

export default Home
