import React from 'react';
import axios from 'axios';
import { tsNonNullExpression } from '@babel/types';
export class StudentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: this.props.optionText,
        };
        this.updateUser = this.updateUser.bind(this);
        this.toggleFormElements = this.toggleFormElements.bind(this);

    }

    componentDidMount() {
        document.getElementById('fname').value = this.props.optionText.firstname;
        document.getElementById('lname').value = this.props.optionText.lastname;
        document.getElementById('email').value = this.props.optionText.email;
        document.getElementById('mobile').value = this.props.optionText.mobile;
        document.getElementById('sapid').value = this.props.optionText.sapid;
        document.getElementById('rollNo').value = this.props.optionText.rollNo;
        document.getElementById('sex').value = this.props.optionText.sex;
        document.getElementById('course').value = this.props.optionText.course;
        document.getElementById('branch').value = this.props.optionText.branch;
        document.getElementById('address').value = this.props.optionText.address;
        document.getElementById('higherSecondaryBoard').value = this.props.optionText.higherSecondaryBoard;
        document.getElementById('higherSecondaryYear').value = this.props.optionText.higherSecondaryYear;
        document.getElementById('higherSecondaryPercentage').value = this.props.optionText.higherSecondaryPercentage;
        document.getElementById('seniorSecondaryBoard').value = this.props.optionText.seniorSecondaryBoard;
        document.getElementById('seniorSecondaryYear').value = this.props.optionText.seniorSecondaryYear;
        document.getElementById('seniorSecondaryPercentage').value = this.props.optionText.seniorSecondaryPercentage;
        document.getElementById('cgpa').value = this.props.optionText.cgpa;
        document.getElementById('totalBacklogs').value = this.props.optionText.totalBacklogs;
        document.getElementById('standingBacklogs').value = this.props.optionText.standingBacklogs;
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const json = JSON.stringify(this.state.loggedUser);
    //     localStorage.setItem('loggedUser', json);
    // }
    toggleFormElements() {
        document.getElementById("editUserBtn").style.display = "none";
        document.getElementById("updateUserBtn").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
    }
    updateUser() {
        // var b = document.getElementById('branch');
        // var branch = b.options[b.selectedIndex].text;
        // var c = document.getElementById('course');
        // var course = c.options[c.selectedIndex].text;
        var id = this.props.optionText.id;
        var data = {
            firstname: document.getElementById('fname').value,
            lastname: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            sapid: document.getElementById('sapid').value,
            rollNo: document.getElementById('rollNo').value,
            sex: document.getElementById('sex').value,
            course: document.getElementById('course').value,
            branch: document.getElementById('branch').value,
            address: document.getElementById('address').value,
            higherSecondaryBoard: document.getElementById('higherSecondaryBoard').value,
            higherSecondaryYear: document.getElementById('higherSecondaryYear').value,
            higherSecondaryPercentage: document.getElementById('higherSecondaryPercentage').value,
            seniorSecondaryBoard: document.getElementById('seniorSecondaryBoard').value,
            seniorSecondaryYear: document.getElementById('seniorSecondaryYear').value,
            seniorSecondaryPercentage: document.getElementById('seniorSecondaryPercentage').value,
            cgpa: document.getElementById('cgpa').value,
            totalBacklogs: document.getElementById('totalBacklogs').value,
            standingBacklogs: document.getElementById('standingBacklogs').value,
        }

        console.log("update data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/updateUser/' + id,
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            // document.getElementById('save').innerHTML = 'Added <span className="fas fa-check-circle"></span>';
            // document.getElementById('save').classNameName = 'btn btn-success bottomright';
            alert("User updated");
        });
    }
    render() {
        return (
            <div className="container">

                {/* <div className="col-md-12 relative">

                    <h2 className="mb-4 mt-0 text-center">Student Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">Student Name : {this.props.optionText.companyName}</h6><input type="text" id="companyName" className="form-control pb_height-50 reverse" value={this.props.optionText.companyName} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Category : </h6><input type="text" id="category" className="form-control pb_height-50 reverse" value={this.props.optionText.category} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Job Profile : </h6><input type="text" id="jobProfile" className="form-control pb_height-50 reverse" value={this.props.optionText.jobProfile} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Expected Salary : </h6><input type="text" id="expectedSalary" className="form-control pb_height-50 reverse" value={this.props.optionText.expectedSalary} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Students Required : </h6><input type="text" id="studentsRequired" className="form-control pb_height-50 reverse" value={this.props.optionText.studentsRequired} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Company visiting campus : </h6><input type="text" id="companyVisitingCampus" className="form-control pb_height-50 reverse" value={this.props.optionText.companyVisitingCampus} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">10th Passing Criteria : </h6><input type="text" id="criteriaOf10th" className="form-control pb_height-50 reverse" value={this.props.optionText.criteriaOf10th} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">12th passing Criteria : </h6><input type="text" id="criteriaOf12th" className="form-control pb_height-50 reverse" value={this.props.optionText.criteriaOf12th} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage Passing Criteria : </h6><input type="text" id="collegeCriteria" className="form-control pb_height-50 reverse" value={this.props.optionText.collegeCriteria} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Description : </h6><textarea rows="5" type="text" id="description" className="form-control reverse" value={this.props.optionText.description} disabled />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details" />
                    </div>

                </div> */}

                <div className="col-md-12 relative align-self-center">

                    <h2 className="mb-4 mt-0 text-center">Student Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">First Name : </h6>
                        <input type="text" id="fname" className="form-control pb_height-50 reverse" disabled/>
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Last Name : </h6>
                        <input type="text" id="lname" className="form-control pb_height-50 reverse"  disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Email : </h6>
                        <input type="text" id="email" className="form-control pb_height-50 reverse"  disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Mobile no. : </h6>
                        <input type="text" id="mobile" className="form-control pb_height-50 reverse"  disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">SAP ID : </h6>
                        <input type="text" id="sapid" className="form-control pb_height-50 reverse"  disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Roll Number : </h6>
                        <input type="text" id="rollNo" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Sex : </h6>
                        <input type="text" id="sex" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Address : </h6>
                        <input type="text" id="address" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Board : </h6>
                        <input type="text" id="higherSecondaryBoard" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Year : </h6>
                        <input type="text" id="higherSecondaryYear" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Percentage : </h6>
                        <input type="text" id="higherSecondaryPercentage" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Board : </h6>
                        <input type="text" id="seniorSecondaryBoard" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Year : </h6>
                        <input type="text" id="seniorSecondaryYear" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Percentage : </h6>
                        <input type="text" id="seniorSecondaryPercentage" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Course : </h6>
                        <input type="text" id="course" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Branch : </h6>
                        <input type="text" id="branch" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage CGPA : </h6>
                        <input type="text" id="cgpa" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Standing Backlogs : </h6>
                        <input type="text" id="standingBacklogs" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Total Backlogs : </h6>
                        <input type="text" id="totalBacklogs" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group" id="editUserBtn">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details" onClick={this.toggleFormElements} />
                    </div>

                    <div className="form-group" style={{ display: "none" }} id="updateUserBtn">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Update" onClick={this.updateUser} />
                    </div>

                </div>

            </div>
        );
    }
}
