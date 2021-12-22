import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // manv: "",
            // tennv: "",
            // email: "",
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },
            formValid: false,
            manvValid:false,
            tennvValid: false,
            emailValid: false,
        };
    }
    handleOnChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        this.setState({
            values: { ...this.state.values, [name]: value },
        }, () => {
            // console.log(this.state);
        });
    };
    handleError = (event) => {
        const { name, value } = event.target;
        // console.log(name,value);
        // let mess= "";
        // if(value.trim() === ""){
        //     //trường hợp thông báo lỗi
        //     mess = "Vui lòng nhập" + name;
        // }else{
        //     //trường hợp không thông báo lỗi
        //     mess= "";
        // }
        //toán tử 3 ngôi: dk? "DK ĐÚNG": "ĐK SAI"
        let mess = value.trim() === "" ? "Vui lòng nhập " + name : "";
        // console.log(mess);

        let { manvValid, tennvValid, emailValid } = this.state;

        switch(name){
            case "manv":
            manvValid = mess === ""? true : false;
            if(value && value.length <=4){
                manvValid = false;
                mess = "Do dai ky tu tu 5 tro len";
            }
            break;

            case "tennv":
            tennvValid = mess === ""? true : false;
            break;

            case "email":
            emailValid = mess === ""? true : false;
            if(value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")){
                emailValid = false;
                mess= "email khong hop le";
            }
            break;

            default:
            break;
        }
        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            manvValid,
            tennvValid,
            emailValid,
        }, () => {
            // console.log(this.state);
            this.handleFormValid();
        })
    };
    handleFormValid = () => {
        const {manvValid,tennvValid,emailValid} = this.state;
        this.setState({
            formValid: manvValid && tennvValid && emailValid,
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã Nhân Viên</label>
                        <input type="text" className="form-control" onChange={this.handleOnChange} name="manv"
                            onBlur={this.handleError} />
                        {/* <div className='alert alert-danger'>{this.state.errors.manv}</div> */}
                        {this.state.errors.manv && (<div className='alert alert-danger'>{this.state.errors.manv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Tên Nhân Viên</label>
                        <input type="text" className="form-control"
                            onChange={this.handleOnChange} name="tennv" value={this.state.tennv}
                            onBlur={this.handleError} />
                        {this.state.errors.tennv && (<div className='alert alert-danger'>{this.state.errors.tennv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            onChange={this.handleOnChange} name="email" value={this.state.email}
                            onBlur={this.handleError} />
                        {this.state.errors.email && (<div className='alert alert-danger'>{this.state.errors.email}</div>)}
                    </div>
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
