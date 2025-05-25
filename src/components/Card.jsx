import './Card.css';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Card = ({ children, id }) => {
    const [ref, isVisible] = useAnimateOnScroll();

    return (
        <section className={`card ${isVisible ? 'card-show' : 'card-hidden'}`} id={id} ref={ref}>
            {children}
        </section>
    );
}

export default Card;