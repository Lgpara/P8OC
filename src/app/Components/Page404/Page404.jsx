import Error404 from "./Error404/Error404"
import Header from "../General/Header/Header"
import Footer from "../General/Footer/Footer"

function Page404(){
    return(
        <main>
            <Header />
            <Error404 />
            <Footer />
        </main>
    )
}

export default Page404