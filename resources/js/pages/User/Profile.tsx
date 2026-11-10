import { useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react';

interface FormValues {
    name: string;
    surname: string;
    email: string;
    [key: string]: string;
}

export default function Register() {
    const { data, setData, post, processing, errors } = useForm<FormValues>({
        name: '',
        surname: '',
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <form onSubmit={submit}>
            <div>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Имя"
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>

            <div>
                <input
                    type="text"
                    value={data.surname}
                    onChange={(e) => setData('surname', e.target.value)}
                    placeholder="Фамилия"
                />
                {errors.surname && <div className="text-red-500">{errors.surname}</div>}
            </div>

            <button type="submit" disabled={processing}>
                Отправить
            </button>
        </form>
    );
}
