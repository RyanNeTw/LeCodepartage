import { Link } from "react-router-dom"


function Error404 () {


    return (
        <>  
            <div className="flex flex-col gap-2 justify-center items-center h-screen">
                <img src="./images/error404.png" alt="Robot" />
                <h3 className="font-bold text-lg">
                Retour à la 
                    <Link to="/" className="text-light-blue pl-1 cursor-pointer">Page d’acceuil</Link>
                </h3>
            </div> 
        </>
    )
}

export default Error404