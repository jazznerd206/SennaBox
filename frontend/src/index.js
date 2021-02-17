import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter}  from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <RecoilRoot >
            <App />
        </RecoilRoot>
    </BrowserRouter>,
    document.getElementById('root')
)