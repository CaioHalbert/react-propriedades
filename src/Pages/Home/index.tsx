import Card from '../../Components/Card';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { AboutText } from '../../Utils/constants.ts';
import './style.css';
export default function Home() {
  return (
    <>
        <Header tittle="Home" />
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <Card 
                tittle='Caio Halbert' 
                subtitle='Professor TOP MESMO' 
                image='https://avatars.githubusercontent.com/u/15151673?s=96&v=4'
                description={AboutText}
            />
        <Footer />
    </>
  );
}