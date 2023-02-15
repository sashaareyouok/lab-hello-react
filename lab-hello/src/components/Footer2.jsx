import Logo1 from "../images/Logo1.png"
import Logo2 from "../images/Logo2.png"
import Logo3 from "../images/Logo3.png"
import Logo4 from "../images/Logo4.png"

function Footer () {
    return(

<div>

<footer className="footerTwo">
<div class="container text-center">
  <div class="row">

    <div class="col">
    
    <img src = {Logo1} alt="ironhack logo" /> 
    <br></br>
    <br></br>
    <h4>Declarative</h4>
    <br></br>
    <div className="pTagPos">

    <p className="pTag">It is cool,great,love it,nice,cute,cool!</p>
    
    </div>
   </div>

    <div class="col">
    <img src = {Logo2} alt="ironhack logo"/>
    <br></br>
    <br></br>
    <h4>Components</h4>
    <br></br>
    <div className="pTagPos">

    <p className="pTag">It is cool,great,love it,nice,cute,cool!</p>
    
    </div>
    </div>
    <div class="col">
    <img src = {Logo3} alt="ironhack logo"/>
    <br></br>
    <br></br>
    <h4>Declarative</h4>
    <br></br>
    <div className="pTagPos">

    <p className="pTag">It is cool,great,love it,nice,cute,cool!</p>
    
    </div>
    </div>
    <div class="col">
    <img src = {Logo4} alt="ironhack logo"/>
    <br></br>
    <br></br>
    <h4 className="tagsizing">JSX</h4>
    <br></br>
    <div className="pTagPos">

    <p className="pTag">It is cool,great,love it,nice,cute,cool!</p>
    
    </div>

    </div>
  </div>
</div>
 
</footer>

</div>

)
}

export default Footer