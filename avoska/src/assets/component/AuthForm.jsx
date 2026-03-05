import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export function AuthForm() {
    const nav = useNavigate()
    const [login, setLogin] = useNavigate
    const [pass, setPass] = useNavigate





 async function getUser(formData) {
    console.log(formData);

    let response = await fetch('http://localhost:3000/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
          body: JSON.stringify({
                password: regPass,
                email: regEmail
    })

    // return  await response.json()
}
    )}

        async function Reg() {
    console.log(formData);
  const userFromDB = await getUser(formData)
     console.log(userFromDB);
            if (userFromDB.length !== 0){
            
                if (userFromDB.login === 'sklad' ) {
                nav('/admin')
            } else {
                nav('/list-zakaz')
            }
        } else {
            alert('Неверный логин или пароль');
        }
}
Reg()

    

    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Форма авторизации</h1>
                <input type="text" name="login" placeholder="Введите логин" value={formData.login} onChange={onChange} /><br />
                <input type="password" name="password" placeholder="Введите пароль" value={formData.password} onChange={onChange} /><br />
                <button type="submit">Войти</button>
                <button type="button" onClick={() => nav('/')}>Регистрация</button>
            </form>
        </>
    )
}