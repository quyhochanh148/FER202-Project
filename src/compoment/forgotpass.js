import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './forgotpass.css';

export default function ForgotPasswordPage() {
    return (
        <Container className="container">
            <h2>Quên Mật Khẩu</h2>
            <Form>
                <Form.Group controlId="formBasicEmail" className="form-group">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="form-control"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary">
                    Gửi Yêu Cầu
                </Button>
            </Form>
        </Container>
    );
}
