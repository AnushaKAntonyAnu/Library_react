import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallStudent = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])    
    return (
        <div><br></br>
            <NavBar/>
            <h3 align="center" ><u>ViewAll Book</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped table-hover">
                           
                                <thead>
                                    <tr>
                                    <th scope="col">sno</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Publishedyear</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Distributor</th>
                                        <th scope="col">Publisher</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (value,index)=>{
                                            return<tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.title}</td>
                                            <td>{value.category}</td>
                                            <td>{value.authorname}</td>
                                            <td>{value.publishedyear}</td>
                                            <td>{value.description}</td>
                                            <td>{value.distributor}</td>
                                            <td>{value.publisher}</td>
                                            <td>{value.price}</td>
                                        </tr>
                                       
                                        }
                                    )}
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallStudent