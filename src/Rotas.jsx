import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/client/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduct from './views/product/FormProduct';
import ListCliente from './views/client/ListCliente';
import ListProduto from './views/product/ListProduto';
import ListEntregador from './views/entregador/ListEntregador';
import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';
import FormFabricante from './views/fabricante/FormFabricante';
import ListFabricante from './views/fabricante/ListFabricante';
import FormLogin from './views/login/FormLogin';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>

                <Route path="/" element={<FormLogin/>} />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-cliente"
                    element={
                        <ProtectedRoute>
                            <ListCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cliente"
                    element={
                        <ProtectedRoute>
                            <FormCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                        <ProtectedRoute>
                            <ListProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-produto"
                    element={
                        <ProtectedRoute>
                            <FormProduct />
                        </ProtectedRoute>
                    }
                />
                <Route path="list-entregador" element={
                    <ProtectedRoute>
                        <ListEntregador />
                    </ProtectedRoute> } />

                <Route path="form-entregador" element={<ProtectedRoute>
                    <FormEntregador />
                    </ProtectedRoute>} />
                <Route path="form-fornecedor" element={ <ProtectedRoute><FormFornecedor /></ProtectedRoute>} />
                <Route path="list-fornecedor" element={ <ProtectedRoute><ListFornecedor /></ProtectedRoute>} />
                <Route path='form-fabricante' element={ <ProtectedRoute><FormFabricante /></ProtectedRoute>} />
                <Route path='list-fabricante' element={ <ProtectedRoute><ListFabricante /></ProtectedRoute>} />
            </Routes>
        </>
    )
}

export default Rotas
