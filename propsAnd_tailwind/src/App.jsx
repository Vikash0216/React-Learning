
import "./App.css";
import Card from "./Components/Card";
function App() {
const myObj ={
  name:'Vikash Mahato',
  job:'Web Developer',
  salary:125000,
  photo:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
  photo2:'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}
const image1 ='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg'
const image2 ='https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4 ">Hello world!</h1>
      {/* <Card pcName = "Indian Village" img= {image1}/>
      <Card pcName = 'Nepal Village'img = {image2} /> */}
      <Card myObj ={myObj}/>
      <Card myObj= {myObj}/>
    
    
    </>
    // myobj are just like parameters we are passing for the function execution
  );
}

export default App;
