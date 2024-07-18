import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
    
                                    
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={"8"}
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                      
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="RG"
                                    width={"8"}
                                >
                                    <InputMask
                                        required
                                        mask="99999-999"
                                      
                                    />
                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={"3"}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                       
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={"5"}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={"5"}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                     
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="QTD Entregas Realizadas"
                                    width={"4"}
                                 
                        
                                />

                                <Form.Input
                                    fluid
                                    label="Valor Por Frete"
                                    width={"4"}
                                  
                                />

                            </Form.Group>

                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label="Rua"
                                    
                                />

                                <Form.Input
                                    fluid
                                    label="Número"
                                    width={"4"}
                                    
                                />

                            </Form.Group>

                            <Form.Group widths="equal">

                                <Form.Input
                                    fluid
                                    label="Bairro"
                                    
                                />

                                <Form.Input
                                    fluid
                                    label="Cidade"
                                   
                                />

                                <Form.Input
                                    fluid
                                    label="CEP"
                                    width={"4"}
                                >
                                    <InputMask
                                        mask="99999-999"
                                        
                                    />
                                </Form.Input>

                            </Form.Group>

                           

                            <Form.Input
                                fluid
                                label="Complemento"
                                
                            />

                            <Form.Group inline>
                                <label>Ativo:</label>
                                <Form.Radio
                                    label="Sim"
                                    name="radio"
                                    />

                                <Form.Radio
                                    label="Não"
                                    name="radio"
                                    />

                            </Form.Group>

                        </Form>


                        <div style={{ marginTop: '4%' }}>

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
