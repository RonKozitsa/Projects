import React from 'react';
import ReactDOM from "react-dom/client";
import './options.scss';

const check = <div>Hi</div>
const div = document.createElement('div');
const root = ReactDOM.createRoot(div);
document.body.appendChild(div);
root.render(check);
