export function GetLocalRepositories() {
  try {
    const result = localStorage.getItem('@gitcompare/repositories')
    return result
  } catch (error) {
    console.log(error)
    return 'Error'
  }
}

export function PutLocalRepositories(item) {
  console.log(item)
  try {
    var data = []
    data = JSON.parse(GetLocalRepositories()) ?? []
    data.push(item)
    localStorage.setItem('@gitcompare/repositories', JSON.stringify(data))
    return
  } catch (error) {
    console.log(error)
    return 'Error'
  }
}

export function RemoveLocalRepository(id) {
  try {
    var items = JSON.parse(GetLocalRepositories())
    const result = items.filter((item) => item.id !== id)
    localStorage.setItem('@gitcompare/repositories', JSON.stringify(result))
    return
  } catch (error) {
    console.log(error)
    return 'Error'
  }
}
