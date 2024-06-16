import React from 'react';
import { Col, Container, Row, Navbar, Nav, FormControl, Button, Image, NavDropdown, Table ,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // Custom CSS for styling

export default function Admin() {
    const users = [
        {
            avatar: 'H',
            name: 'hghghg',
            email: 'demo@gmail.com',
            phone: '0354654214',
            role: 'USER',
            status: 'Kích hoạt',
            date: '14-06-2024',
        },
        {
            avatar: 'P',
            name: 'Phạm Đình Tiến',
            email: 'phamdinhtien@gmail.com',
            phone: '0709732310',
            role: 'USER',
            status: 'Kích hoạt',
            date: '13-04-2024',
        },
        {
            avatar: 'P',
            name: 'Phan Hải Tiến',
            email: 'phanhaitien@gmail.com',
            phone: '0866793860',
            role: 'USER',
            status: 'Kích hoạt',
            date: '13-04-2024',
        },
        {
            avatar: 'M',
            name: 'Mai Đạt Thiên',
            email: 'maidatthien@gmail.com',
            phone: '0700990728',
            role: 'USER',
            status: 'Kích hoạt',
            date: '13-04-2024',
        },
    ];

    return (
        <Container fluid className="admin-container">
            <Row className="header-row align-items-center">
    <Col md={3} className="header-col text-center">
        <h3 className="admin-title">ADMIN</h3>
    </Col>
    <Col md={9} className="header-col">
    <Navbar bg="light" variant="light" className="justify-content-between align-items-center shadow-sm rounded">
        <Form inline>
            <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-2" />
        </Form>
        <div className="d-flex align-items-center">          
            <Image src="https://placehold.co/50x50?text=A" className="profile-img" roundedCircle style={{marginLeft:"800px"}} />
        </div>
    </Navbar>
</Col>


</Row>
            <Row>
                <Col md={3} className="sidebar-col">
                    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="flex-column" >
                                    <NavDropdown title="Quản lý phim" id="nav-dropdown-p1" style={{fontSize:"25px"}}>
                                        <NavDropdown.Item href="#action1">Danh sách phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action2">Thêm phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Sửa phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Xóa phim</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Quản lý user" id="nav-dropdown-p2" style={{fontSize:"25px"}}>
                                        <NavDropdown.Item href="#action5">Danh sách user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">Tạo user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action7">Sửa user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action8">Xóa user</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col md={9} className="content-col">
                    <div className="button-section d-flex justify-content-between align-items-center my-3">
                        <Button style={{width:"150px"}} className="shadow-sm create-button">Tạo user</Button>
                        
                    </div>

                    <Table striped bordered hover className="shadow-sm rounded">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Quyền</th>
                                <th>Trạng thái</th>
                                <th>Ngày tạo</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="table-row">
                                    <td>
                                        <div className="avatar-circle">
                                            <span className="initials">{user.avatar}</span>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                    <td className={user.status === 'Kích hoạt' ? 'text-success' : 'text-warning'}>
                                        {user.status}
                                    </td>
                                    <td>{user.date}</td>
                                    <td>Delete</td>
                                    <td>Update</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
