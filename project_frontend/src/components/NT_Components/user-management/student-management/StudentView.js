import axios from 'axios';
import React, { Component } from 'react'

export default class StudentView extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            nic:"",
            student_id:"",
            faculty:"",
            batch:"",
            specialization:"",
            phone:"",
            DOB:"",
            email:"",
            status:"",
            imageUrl:""
 
        }
    }
 
    componentDidMount(){
        const id = this.props.match.params.id;
 
        axios.get(`http://localhost:8070/viewRole/stview/${id}`).then((res)=>{
            //console.log(res.data)
            if(res.data.success){
                this.setState({
                    name:res.data.student.name,
                    nic:res.data.student.nic,
                    student_id:res.data.student.student_id,
                    faculty:res.data.student.faculty,
                    batch:res.data.student.batch,
                    specialization:res.data.student.specialization,
                    phone:res.data.student.phone,
                    DOB:res.data.student.DOB,
                    email:res.data.student.email,
                    status:res.data.student.status,
                    imageUrl:res.data.student.imageUrl
                })
            }
        }).catch((e)=>{
            console.log(e)
        })
    }
 
    onBack(){
        window.location.href="/student"
    }

  render() {
    return (
        <div className='alignMarginN'>
            <div class="container">
                <div class="main-body">
                <div class="col-md-12">
                <div class="card mb-2 mt-3" style={{width:94+"%",boxShadow:"0 30px 50px 0 rgba(0,0,0,0.2)"}}>
                    <div class="card-body">
                    <h4 className="fw-bold mb-1">{this.state.name}</h4><br/>

                    <div className='row'>
                    <div className="col-md-6 mb-2">
                        <div class="form-floating mb-2">
                            <ul>
                                <li>
                                    Name : {this.state.name}
                                </li>
                                <li>
                                    NIC : {this.state.nic}
                                </li>
                                <li>
                                    Student ID : {this.state.student_id}
                                </li>
                                <li>
                                    Date of Birth : {this.state.DOB}
                                </li>
                                <li>
                                    Email : {this.state.email}
                                </li>
                                <li>
                                    Phone Number : {this.state.phone}
                                </li>
                                <li>
                                    faculty : {this.state.faculty}
                                </li>
                                <li>
                                    Batch : {this.state.batch}
                                </li>
                                <li>
                                    Specialization : {this.state.specialization}
                                </li>


                            </ul>
                        </div>
                    </div>


                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
}
