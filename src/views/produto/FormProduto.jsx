import React from "react";
import InputMask from 'react-input-mask';
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
                                    label='Titulo'
                                    width={12}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo do Produto'>
                                    <InputMask
                                        required
                                        mask="999999999999"
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <form.group>
                                
                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    width={6}>
                                    height={12}
                                
                                </Form.Input>

                            </form.group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Unitario'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo em Minutos'
                                    width={6}
                                >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Maximo em Minutos'
                                    width={6}
                                >
                                    
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
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
