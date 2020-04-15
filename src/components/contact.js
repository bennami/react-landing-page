import React,{useState} from "react";


const Contact = () =>{
    return(
        <React.Fragment>
            <div className="contact">
            <h2>Want to work together? <br/> drop me a line!</h2>

                <form action="">
                    <input type="text" placeholder={"Name"}/>
                    <input type="email" placeholder={"Email"}/>
                    <textarea placeholder="Remember, be nice!" cols="30" rows="10"></textarea>
                    <button type={'submit'}> SEND!</button>

                </form>
            </div>
        </React.Fragment>
    )

};

export default Contact;