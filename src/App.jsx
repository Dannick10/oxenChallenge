import './App.css'

import { useEffect, useState } from 'react'

import { GITURL } from '../config'

import GridRepository from './components/GridRepository'
import UserInfo from './components/UserInfo'


function App() {

  const [dataUser,setDataUser] = useState('Dannick10')

  const url_Repository = `${GITURL + dataUser}/repos`
  const url_User = `${GITURL + dataUser}`

  const [userRepor,setUserRepor] = useState([])
  const [useInfo,setUseInfo] = useState([])

    useEffect(() => {

    async function fetchRepository() {
      const responseRepo = await fetch(url_Repository);
      const repository = await responseRepo.json();
      setUserRepor(repository);
    }
  
    async function fetchUserInfo() {
      const responseUser = await fetch(url_User);
      const user = await responseUser.json();
      setUseInfo(user);
    }
  
    fetchRepository(userRepor);
    fetchUserInfo(useInfo);
  }, []);


  return (
    <>


      <section className='profile_section'>
        <UserInfo data={useInfo}/>
      </section>

      <section className='table_section'>
      <GridRepository data={userRepor}/>
      </section>
    </>
  )
}

export default App
