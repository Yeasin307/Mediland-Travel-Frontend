import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../../Images/background_image.jpg";
import styles from './Banner.module.css';

const Banner = () => {
    return (
        <Container>
            <img src={img} width="100%" className="img-fluid" alt="" />
            <h2 className={styles.title}>Explore your world with us.</h2>
        </Container>
    );
};

export default Banner;