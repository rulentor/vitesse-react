import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import onbd3 from '/img/onbd/onbd3.png';
import '../../App.css';

const Onboarding3 = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Все путешествия
		</PanelHeader>
		<Div>
			<img className="on_img" src={onbd3} alt=""/>
            <Button stretched size="l" mode="primary" onClick={props.go} data-to="travel">
						Продолжить!
			</Button>
		</Div>
	</Panel>
);

Onboarding3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Onboarding3;