import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            alert('Incidente cadastrado com sucesso.');
        } catch (error) {
            alert('Falha ao tentar cadastrar o incidente, por favor tente novamente.')
        }
       

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                 </Link>
                </section>
                <form onSubmit={handleNewIncident} >
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Titulo" />
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
                    />
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor em reais"
                    />


                    <button className="button" type="submit" > Cadastrar</button>
                </form>
            </div>
        </div>
    );
}