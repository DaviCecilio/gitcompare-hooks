import React, { useContext } from 'react'
import t from 'prop-types'
import { FaExclamation } from 'react-icons/fa'

import { ReposContext } from '../../services/repoContext'
import { RemoveLocalRepository } from '../../services/localStorage'
import { CompareListStyle, Repository } from './styles'

const CompareList = () => {
  const { repos, setRepos } = useContext(ReposContext)

  function handleDeleteClick(id) {
    const newRepos = repos.filter((repo) => repo.id !== id)
    setRepos(newRepos)
    RemoveLocalRepository(id)
  }

  return (
    <CompareListStyle>
      {repos.length > 0 ? (
        repos.map((i) => (
          <Repository key={i.id}>
            <header>
              <img src={`${i.owner.avatar_url}`} alt={`${i.owner.login}`} className="imgLogo" />
              <strong>{`${i.name}`}</strong>
              <small>{`${i.owner.login}`}</small>
            </header>

            <ul>
              <li>
                {`${i.stargazers_count}`} <small>starts</small>
              </li>
              <li>
                {`${i.forks_count}`} <small>forks</small>
              </li>
              <li>
                {`${i.open_issues_count}`} <small>issues</small>
              </li>
              <li>
                {`${i.lastCommit}`} <small>last commit</small>
              </li>
            </ul>

            <footer>
              <button type="button" className="removeBtn" onClick={() => handleDeleteClick(i.id)}>
                Delete
              </button>
            </footer>
          </Repository>
        ))
      ) : (
        <div className="emptyRepository">
          <FaExclamation className="iconEmpty" />
          <h2 className="mt-3">Search for a repository above </h2>
        </div>
      )}
    </CompareListStyle>
  )
}
CompareList.defaultProps = {
  repositories: [],
}

CompareList.propTypes = {
  repositories: t.arrayOf(
    t.shape({
      id: t.number,
      name: t.string,
      owner: t.shape({
        login: t.string,
        avatar_url: t.string,
      }),
      stargazers_count: t.number,
      forks_count: t.number,
      open_issues_count: t.number,
      pushed_at: t.string,
    }),
  ),
}

export default CompareList
