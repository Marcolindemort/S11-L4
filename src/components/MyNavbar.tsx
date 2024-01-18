import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand>SpaceFlight News</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#chi-siamo">Chi Siamo</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
