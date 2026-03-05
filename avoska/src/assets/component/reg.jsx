import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router";

export function Reg({ users, setUsers }) {

    const [regSurname, setRegSurname] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [regEmail, setRegEmail] = useState('')
    const [regLogin, setRegLogin] = useState('')
    const [regPass, setRegPass] = useState('')
    const [error, setError] = useState('')
    const [correct, setCorrect] = useState('')

    const navigate = useNavigate()

    async function regis() {
        if (!regSurname || !regNumber || !regLogin || !regPass || !regEmail) {
            setError('заполните все поля')
            return
        }

        try {
            const response = await fetch('http://localhost:5000/reg', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    id_role: 1,
                    login: regLogin,
                    password: regPass,
                    full_name: regSurname,
                    phone: regNumber,
                    email: regEmail
                })
            })

            const data = await response.json()

            if(response.ok) {
                setError('')
                setCorrect('Вы успешно зарегистрировались')
               
            } else {
                setError(data.message)
            }
        } catch(e) {
            setError('Нет связи с сервером')
        }

    }


    return (
        <div className="">
            <h1 className="">Регистрация</h1>
            <input type="text" className="" placeholder="Введите ФИО" value={regSurname} onChange={(e) => setRegSurname(e.target.value)} />
            <input type="number" className="" placeholder="Введите номер телефона" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} />
            <input type="email" className="" placeholder="Введите email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
            <input type="text" className="" placeholder="Введите логин" value={regLogin} onChange={(e) => setRegLogin(e.target.value)} />
            <input type="password" className="" placeholder="Введите пароль" value={regPass} onChange={(e) => setRegPass(e.target.value)} />
            <button onClick={() => regis()} className="">Зарегистрироваться</button>
            <button className="">Уже разрегистрированы? Войти</button>
            {error && <div className="">{error}</div>}
            {correct && <div className="">{correct}</div>}
        </div>
    )
}