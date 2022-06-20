import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Bootstrap extends React.Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div class="hero">
                <img
                    id="img"
                    src="https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                <h1 id="heading">Taufiq Syaifudin</h1>
                <h3 id="heading3"><i>Web Developer</i></h3>
                <input id="button" type="button" value="LinkedIn profile" />
                </div>
                <section>
                <header>
                    <h1 id="services">My Bio</h1>
                    <p id="para1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                    dignissimos alias reiciendis voluptate voluptatem at voluptatibus,
                    voluptates quis molestiae quisquam perspiciatis recusandae
                    necessitatibus temporibus, quasi non ullam officia, magni mollitia!
                    </p>
                </header>
                <div class="new">
                    <article id="article1">
                    <h3>Bed cum wheel chair</h3>
                    <p>
                        Created a bed cum wheelchair model which will be very useful for
                        patients who cannot move from bed and does not need anybody to make
                        them lay in bed
                    </p>
                    </article>
                    <article id="article2">
                    <h3>Rock Paper Scissor game</h3>
                    <p>
                        Created a Rock Paper Scissor game in Python language.This was my
                        first project in python.Learning Machine learning with python
                    </p>
                    </article>
                    <article id="article3">
                    <h3>Volunteer in NSS</h3>
                    <p>
                        I am a NSS volunteer and I am doing social activities with the help
                        of our institution. I Went to Eripatti,Pollachi and renowated
                        schools and the surrounding areas along with my student friends.
                    </p>
                    </article>
                </div>
                </section>
                <section class="contact">
                <h1>My Contact</h1>
                <div class="column">
                    <form action="#">
                    <label for="fname">Email</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your email.."
                    />
                    <label for="subject">Message</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                    ></textarea>
                    <input type="submit" value="Send" />
                    </form>
                </div>
                </section>
                <div class="footer">
                <p>&copy; 2022 Eduwork, Inc. All rights reserved.</p>
                </div>
            </div>
        )
    }
}