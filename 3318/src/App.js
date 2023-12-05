import logo from './logo.svg';
import './App.css';


function Register() {
  return(
  <div className="container">
        <div className="card">
            <div className="card-heading bg-info">
            <h3 className="text-center">Register</h3>
            </div>
        <div className="card-body">
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="fullname" placeholder="Enter fullname" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter Email" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Phone number:</label>
                <input type="number" name="phone" placeholder="Enter phone number" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" placeholder="Enter address" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Note:</label>
                <input type="text" name="note" className="form-control"/>
            </div>
            <div className="button">
            <button className="btn btn-success">Register</button>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Register;
