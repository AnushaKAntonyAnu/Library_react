import React from 'react'
import NavBar from './NavBar'

const ViewallStudent = () => {
    return (
        <div><br></br>
            <NavBar/>
            <h3 align="center" ><u>ViewAll Book</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped table-hover">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">sno</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">PublishYear</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Lilly</td>
                                        <td>Ramkumar</td>
                                        <td>2001</td>
                                        <td>2001</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>nte jeevitham</td>
                                        <td>Manu Mohan</td>
                                        <td>1999</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>The moon</td>
                                        <td>Roy</td>
                                        <td>1998</td>
                                        <td>456</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Cloudy</td>
                                        <td>manu</td>
                                        <td>2001</td>
                                        <td>345</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Lilly</td>
                                        <td>Ramkumar</td>
                                        <td>2001</td>
                                        <td>2001</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Adujeevitham</td>
                                        <td>Najeem</td>
                                        <td>2010</td>
                                        <td>199</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Sachin</td>
                                        <td>Sachin</td>
                                        <td>2001</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>peaceful</td>
                                        <td>Anusha</td>
                                        <td>2022</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>joyful</td>
                                        <td>kumar</td>
                                        <td>2002</td>
                                        <td>450</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Fairytale</td>
                                        <td>Ram</td>
                                        <td>2011</td>
                                        <td>200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallStudent