import Button from "./navbar/Button";
import "../components/Header.css"
function Header(props) {
    return (
      <div className="navigationPane">
            <img className="logo" src="https://www.kotakode.com/static/media/kotakode-logo.3befef90.svg" alt="logo"/>
            <div className="navigationButton1">
                <Button name="Tentang"/>
                <Button name="Produk"/>
                <Button name="FAQ"/>
                <Button name="Events"/>
                <Button name="Partnership"/>
            </div>
            <div className="navigationButton2">
                <Button className="button2" name="Masuk"/>
                <Button className="button2" name="Daftar"/>
            </div>
            
      </div>
    );
  }
  
  export default Header;
  