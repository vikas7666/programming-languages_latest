import seriesData from '../api/seriesData.json'
import SeriesCard from '../components/SeriesCard';
import styles from "../components/Netflix.module.css"
// How to create a component 
// component always start with Capital letter 
export const Netflix = () => {
  const name = "Queen of Tears";
  const rating = 8.2;
  const summary = `Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.`
  /* 1st way  */
  /*   if(age < 18){
      return (
        <>
          <div>
            <img src="./queen.jpg" width="200px" height="200px" />
          </div>
          <h2>Name :  {name} </h2>
          <h3>Rating : {rating} </h3>
          <p>Summary: {summary}</p>
          <p>Genre: {returnGenere()}</p>
          <button>Not Available</button>
        </>
      )
    } */



  return (
    // <>
    //   <div>
    //     <img src="./queen.jpg" width="200px" height="200px" />
    //   </div>
    //   <h2>Name :  {name} </h2>
    //   <h3>Rating : {rating} </h3>
    //   <p>Summary: {summary}</p>
    //   <p>Genre: {returnGenere()}</p>
    //   {/* 2nd way  */}
    //   {/* <button>{ age > 18 ? 'Watch Now' : "Not Available"}</button> */}

    //   {/* 3rd Way */}
    //   {/* {<button>{canWatch}</button>} */}

    //   {<button>{canWatch()}</button>}
    //   {age}
    // </>

    // dyanmci data 
    <>
      <ul className={styles.d_flex}>
        {seriesData.map((item) => {
          return (
            <SeriesCard key={item.id} item={item} />
          )

        })}


      </ul>
    </>
  )
}

const returnGenere = () => {
  const genre = 'RomCom';
  return genre
}

// let canWatch  = "Not Available";
// if(canWatch > 18)  "Can Wath"
const age = 16;

let canWatch = () => {
  if (age > 18) return "Watch Now";
  return "Not Availble"
}

//   export default Netflix;  // This is default basic way we can write 

// 2nd components
export const Footer = () => {
  return (<><p>copyright @vikas shukla</p></>)
}

export const Header = () => {
  return (<><p>This is a Header part</p></>)
}