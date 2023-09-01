
import { Container, MenueSection } from "./menue.style"
import Close from '../../assets/closeicon.svg'
import { PropTypes } from "prop-types";
import MenueItem from "../MenueItem/MenueItem.component";
const MenueItems = [
    {
        'id': 1,
        'headline': 'BUY & SELL',
        'items': [{ 'navigation': "Sell", 'path': '/' }, { 'navigation': 'Browse Home', 'path': '/browsehomes' }, { 'navigation': 'Buy', 'path': '/' }, { 'navigation': 'Down Payment', 'path': '/' }],
        'button': false
    },
    {
        'id': 2,
        'headline': 'COMPANY',
        'items': [{ 'navigation': "About", 'path': '/' }, { 'navigation': "Contact Us", 'path': '/' }, { 'navigation': "Careers", 'path': '/' }, { 'navigation': "'Privacy Policy'", 'path': '/' }],
        'button': false
    },
    {
        'id': 3,
        'headline': 'LOCATIONS',
        'items': [{ 'navigation': "Greater Toronto Area", 'path': '/' }, { 'navigation': "Region of Peel", 'path': '/' }, { 'navigation': "Region of Hamilton", 'path': '/' }, { 'navigation': "Region of Waterloo", 'path': '/' }],
        'button': true,
    }

]
export default function Menue({ menue, setMenue }) {
    return (
        <Container menue={menue}>
            <MenueSection>
                <p>Menue</p>
                <img src={Close} alt="close" onClick={() => setMenue(!menue)} />
            </MenueSection>
            {MenueItems.map(data =>
                <MenueItem key={data.id} headline={data.headline} items={data.items} button={data.button} />
            )}
        </Container>
    )
}

Menue.propTypes = {
    menue: PropTypes.bool,
    setMenue: PropTypes.func
}