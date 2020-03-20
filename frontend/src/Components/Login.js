import React from 'react';



export default function Login({onChange, ...props}) {

   

        return (

            <div className="card-body  col-md-4 mx-auto mt-5">
                <div className="card-title text-center">
                    <h3>Ingrese Sus Datos</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={props.onSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="E-mail" className="form-control" onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className="form-control" onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block">Sign In</button>
                        </div>

                    </form>

                    <div className="form-group">
                            <button type="button" className="btn btn-secondary btn-block" onClick={props.btnOnClick}>Get Companys</button>
                        </div>

                </div>
            </div>
           
        )
   
}