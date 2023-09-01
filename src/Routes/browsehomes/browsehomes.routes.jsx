
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../../store/auth.context"
import { ProductContext } from "../../store/product.context"
import LoginError from "../../components/LoginErrorMessage/LoginError.component"
import BrowserHomeItem from "../../components/browserhomeitem/browserhomeitem.component"
import { Container, PageDetails, Homes } from './browsehomes.style'
import axios from "axios"
export default function BrowseHomse() {
    const Auth = useContext(AuthContext)
    const Product = useContext(ProductContext)
    const { userAuth } = Auth.state
    const { state, dispatch } = Product
    useEffect(() => {
        const DataFeatching = async () => {
            const sessionAuth = sessionStorage.getItem('auth');
            if (sessionAuth !== null) {
                const Data = await axios.get('https://run.mocky.io/v3/058dbada-3f7f-46c6-83d2-a3c5575b2c6a')
                dispatch({ type: 'products', payload: Data.data.data });
            }
        }
        return () => DataFeatching()
    }, [dispatch, userAuth])
    return (
        <>
            {userAuth === null ? <LoginError /> : (state.products && <Container>
                <PageDetails>
                    <h1>Browse Homes</h1>
                    <p>View your Dream Home</p>
                </PageDetails>
                <Homes>
                    {
                        state.products.map((data) => <BrowserHomeItem key={data.id} products={data} />)
                    }

                </Homes>

            </Container>)}
        </>
    )
}
