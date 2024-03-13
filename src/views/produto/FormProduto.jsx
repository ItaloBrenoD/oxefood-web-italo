import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="50"
                                />

                            </Form.Group>

                            <Form.TextArea
                                required
                                label='Descrição'
                            />

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    type='number'
                                    step="0.01"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Tempo de Entrega Mínimo (minutos)'
                                    type='number'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Tempo de Entrega Máximo (minutos)'
                                    type='number'
                                />

                            </Form.Group>

                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                            >
                                <Icon name='list' />
                                Listar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}