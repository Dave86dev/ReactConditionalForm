
import React, { useState, useEffect } from 'react';
import { Clicker } from '../../common/Clicker/Clicker';
import { InputText } from '../../common/InputText/InputText';
import './Register.css';

export const Register = () => {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
        credit: {
            creditNumber: '',
            owner: '',
            expDate: ''
        }
    })

    const [page, setPage] = useState(0);

    const InputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const registerMe = () => {

        console.log("this registers me......")
    }

    const changePage = () => {

        let destination = (page === 0) ? 1 : 0;

        setPage(destination);

    }

    return (
        <div className="registerDesign">
            <div className="registerCard">
                <div className="registerCardTop">REGISTER</div>
                <div className="registerCardCenter">

                    {page === 0 &&
                        <div className="page0InputsDesign">
                            <div className="formDivider">
                                <InputText
                                    name={"name"}
                                    type={"text"}
                                    value={user.name}
                                    placeholder={"write your name"}
                                    changeBehaviour={InputHandler}
                                />
                                <InputText

                                    name={"surname"}
                                    type={"text"}
                                    value={user.surname}
                                    placeholder={"write your surname"}
                                    changeBehaviour={InputHandler}

                                />
                            </div>
                            <div className="formDivider">
                                <InputText
                                    name={"email"}
                                    type={"email"}
                                    value={user.email}
                                    placeholder={"write your email"}
                                    changeBehaviour={InputHandler}
                                />
                                <InputText

                                    name={"phone"}
                                    type={"text"}
                                    value={user.phone}
                                    placeholder={"write your phone"}
                                    changeBehaviour={InputHandler}

                                />
                            </div>
                        </div>
                    }

                    {page === 1 &&
                        <div className="page0InputsDesign">
                            <div className="formDivider">
                                <InputText
                                    name={"country"}
                                    type={"text"}
                                    value={user.country}
                                    placeholder={"write your country"}
                                    changeBehaviour={InputHandler}
                                />
                                <InputText

                                    name={"city"}
                                    type={"text"}
                                    value={user.city}
                                    placeholder={"write your city"}
                                    changeBehaviour={InputHandler}

                                />
                            </div>
                            <div className="formDivider">
                                <InputText
                                    name={"street"}
                                    type={"text"}
                                    value={user.street}
                                    placeholder={"write your street"}
                                    changeBehaviour={InputHandler}
                                />
                                <InputText

                                    name={"streetNumber"}
                                    type={"text"}
                                    value={user.streetNumber}
                                    placeholder={"write your street number"}
                                    changeBehaviour={InputHandler}

                                />
                            </div>
                        </div>
                    }
                </div>
                <div className="registerCardBottom">
                    {page === 0 &&

                        <Clicker
                            functionality={changePage}
                            title={"Next Page"}
                            design={"changePageClickDesign"}
                        />
                    }

                    {page === 1 &&

                        <>
                            <Clicker
                                functionality={changePage}
                                title={"Previous Page"}
                                design={"changePageClickDesign"}
                            />

                            <Clicker
                                functionality={registerMe}
                                title={"Register"}
                                design={"registerClickDesign"}
                            />

                        </>

                    }
                </div>
            </div>
        </div>
    )
}