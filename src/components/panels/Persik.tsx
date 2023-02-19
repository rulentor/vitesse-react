import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';

import onbd2 from '/img/onbd/onbd2.png';
import '../../App.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Все путешествия
		</PanelHeader>
		<Div>
			<img className="on_img" src={onbd2} alt=""/>
			<Button stretched size="l" mode="primary" onClick={props.go} data-to="onbd3">
						Продолжить!
			</Button>
		</Div>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
