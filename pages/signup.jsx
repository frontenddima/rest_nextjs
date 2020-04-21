import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitData = async e => {
        e.preventDefault()
        try {
            const body = {name, email}
            const res = await fetch(`http://localhost:3000/api/user`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            const data = await res.json()
            Router.push('/login')
        } catch(error) {
            console.error(error)
        }
      
    } 
    return(
        <div>
            <Header />
            <Layout />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                signup
                            </div>
                            <div className="card-body">
                            
                                <form onSubmit={submitData}>
                                    <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                        <input 
                                            autoFocus
                                            class="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp"
                                            placeholder="name"
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input 
                                        class="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp"
                                        autoFocus
                                        placeholder="email address"
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    </div>
                                    <input 
                                        className="btn btn-primary"
                                        disabled={!name || !email}
                                        type="submit"
                                        value="Signup"
                                    />
                                </form>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          
        </div>
    )
}

export default Signup