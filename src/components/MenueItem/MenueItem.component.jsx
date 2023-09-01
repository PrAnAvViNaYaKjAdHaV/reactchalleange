/** @format */

import { PropTypes } from 'prop-types';
import { Container, Main, ItemLink, MenueItemContainer } from './MenueIte.style';
import UpArrow from '../../assets/up-arrow.svg';
import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.components';
import Location from '../../assets/WhiteLocation.svg'
export default function MenueItem({ button, items, headline }) {
    const [arrow, setArrow] = useState(true);
    return (
        <Container>
            <Main arrow={arrow}>
                <p>{headline}</p>
                <img
                    src={UpArrow}
                    alt=""
                    onClick={() => setArrow(!arrow)}
                />
            </Main>
            {arrow && <MenueItemContainer>
                {items.map((data) => <ItemLink key={data.navigation} to={data.path}>{data.navigation}</ItemLink>)}
            </MenueItemContainer>}
            {arrow && button && (
                <Button buttonType={BUTTON_TYPE_CLASSES.register}>
                    <img src={Location} />
                    <p>Map Search</p>
                </Button>
            )}
        </Container>
    );
}

MenueItem.propTypes = {
    button: PropTypes.bool,
    items: PropTypes.array,
    headline: PropTypes.string,
};
