import Error404 from "./E404"
import Header from "./Header"
import Footer from "./Footer"

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