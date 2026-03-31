import styles from "../components/Netflix.module.css"
import styled from "styled-components";

export const SeriesCard = ({ item }) => {
  // console.log('item', item);
  if (!item) {
    return <li>Error: Item data is missing.</li>;
  }

  const { id, img_url, name, rating, description, cast, genre, watch_url } = item;

  if (!name || !id || !img_url || !rating || !description || !cast || !genre || !watch_url) {
    console.log('some data missing');
    return <li>Error: Incomplete item data.</li>; // Return an error message to the UI
  }

  // Object
  // const btn_style ={
  //   padding : "1.2rem 2.4 rem",
  //   border : "none",
  //   fontSize : "1.2rem",
  //   backgroundColor : `${rating >= 8.5  ? '#7dcea0' : '#f7dc6f'}`,
  //   color : "#fff",
  //   fontWeight : "bold"
  // }


  const VikasButton = styled.button`
     padding : 1.2rem 2.4 rem;
    border : none;
    font-size : 1.2rem;
    background-color : ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color : #fff;
    font-weight : bold
  `
  const Rating = styled.h3`
     padding: 0.3rem 1.8rem;
      color: #000;
      margin-left: 1.2rem;
      border-radius: 100rem;
  `
  // const ratingClass = `${rating > 9.5  ? 'super_hit' : 'average'}`;
  const ratingClass = `${rating > 9.5 ? styles.super_hit : 'average'}`;

  return (
    <li key={id} className={styles.card}>
      <div className="card">
        <img src={img_url} alt={name} width="200px" height="200px" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        {/* <h3>Rating: <span className={`rating ${rating > 9.5  ? 'super_hit' : 'average'}`}>{rating}</span></h3> */}
        <Rating>Rating: <span className={`${styles.rating} ${styles.ratingClass}`}>{rating}</span></Rating>
        <p>Summary: {description}</p>
        <p className="text-3xl">Cast: {cast.join(' ,')}</p>
        <p>Genre: {genre}</p>
        <a href="{watch_url}" target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <VikasButton rating={rating}>Watch Now</VikasButton>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;


