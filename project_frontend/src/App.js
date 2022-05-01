// import React from 'react'
// import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';

// import Signup from './components/DH_Components/student_Register';
// // import { Login } from './components/screens/Login';
// // import { Profile } from './components/screens/Profile';
// // import { Signup } from './components/screens/Signup';

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>
//              <Route path="/" element={<Signup />} />
//       </Routes

//     ></BrowserRouter>


//   );
// }

// export default App;

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import UserManagementPage from './components/NT_Components/user-management/UserManagementPage';
import Studentmanagement from './components/NT_Components/user-management/student-management/Studentmanagement';
import DisplayStudentDetails from './components/NT_Components/user-management/student-management/DisplayStudentDetails';
import UpdateStudentDetails from './components/NT_Components/user-management/student-management/UpdateStudentDetails';
import StaffManagement from './components/NT_Components/user-management/Staff-management/StaffManagement';
import DisplayStaffMember from './components/NT_Components/user-management/Staff-management/DisplayStaffMember';
import UpdateStaffMember from './components/NT_Components/user-management/Staff-management/UpdateStaffMember';

function App() {
  return (
    <BrowserRouter>
      <Switch>
             <Route path="/" component={UserManagementPage} exact/>
             <Route path="/student" component={Studentmanagement}/>
             <Route path="/showstudent/:id" component={DisplayStudentDetails}/>
             <Route path="/updatestudent/:id" component={UpdateStudentDetails}/>
             <Route path="/staff/:role" component={StaffManagement}/>
             <Route path="/showstaff/:id" component={DisplayStaffMember}/>
             <Route path="/updatestaff/:id" component={UpdateStaffMember}/>
      </Switch>
    </BrowserRouter>


  );
}

export default App;