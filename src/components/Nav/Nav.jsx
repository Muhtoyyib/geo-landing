import Button from "../Button/Button"


import LogoImg from "../../assets/logo-removebg-preview.png"

export default function Nav(){
  

    return(
        <>
            <div className="nav">
                <div className="nav--brand">
                    <Button type="a" link={`/`} className="nav--brand nav--container">
                        <img src={LogoImg} alt="GeoTopUp"/>
                        <h1> GeoTopUp Inc</h1>
                    </Button>
                </div>

                <div className="nav--button nav--container" >
                    <Button type="a" link={`/get-app`} className="btn btn--nav">
                        Get app
                    </Button>
                </div>
            </div>

        </>
    )
}