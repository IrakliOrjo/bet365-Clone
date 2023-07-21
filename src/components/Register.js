import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    //const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(props.user));
    }, [props.user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [props.user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(props.user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            
            props.setUserLogged(true);
            console.log(props.userLogged)
            //clear state and controlled inputs
            //need value attrib on inputs for this
            
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="relative">
                    <p onClick={() => {props.setShowFixedDiv(false)}} className="absolute hover:cursor-pointer -top-6 -right-4">X</p>
                    <p ref={errRef} className={errMsg ? "flex" : "hidden"} aria-live="assertive">{errMsg}</p>
                    <form className="gap-6 flex flex-col" onSubmit={handleSubmit}>
                        
                        <input
                            className={`${validName ? 'outline-green-600' : 'outline-red-700'} border border-zinc-700  bg-teal-100
                            p-3
                            `}
                            type="text"
                            placeholder="Username"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => props.setUser(e.target.value)}
                            value={props.user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />         


                       
                        <input
                        className={`${validPwd ? 'outline-green-600' : 'outline-red-700'} p-3 bg-teal-100`}
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={`${pwdFocus && !validPwd ? "flex" : "hidden"} text-[.7rem] text-red-700`}>
                            
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        
                        <input
                            className={`${validPwd && matchPwd ? 'outline-green-600' : 'outline-red-700'} p-3 bg-teal-100`}
                            type="password"
                            placeholder="Confirm Password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={`${matchFocus && !validMatch ? "flex" : "hidden"} text-[.7rem] text-red-600`}>
                            
                            Must match the first password input field.
                        </p>
                        <h2></h2>

                        <button className="bg-green-800 rounded-sm text-white font-semibold h-12"
                         disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>

                 
                    
                </section>
            )}
        </>
    )
}

export default Register