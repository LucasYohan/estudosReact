import React from 'react'
import axiosInstance from '../../axiosConfigs'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([])

  const [codigo, setCodigo] = useState("")

  const getPosts = async () => {

    try {

      const response = await axiosInstance.get("http://localhost:3001/");

      const data = response.data;

      setPosts(data)

      const pegaCodigo = data.map(codigo => {

        return{
          "codigo": `${codigo.codigo}`
        }
      })

    
      setCodigo(pegaCodigo)



    } catch (error) {

      console.log("erro ao buscar dados",error)

    }

  }


  useEffect(() => {

    getPosts()

  })


  return (
    <div>home {codigo}</div>
  )
}

export default Home